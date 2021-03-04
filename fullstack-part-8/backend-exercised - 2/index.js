const { ApolloServer, UserInputError, gql, AuthenticationError } = require('apollo-server')
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose')
const Author = require('./models/author')
const Book = require('./models/books')
const User = require('./models/user')


mongoose.set('useFindAndModify', false)

const MONGODB_URI = 'mongodb+srv://phonebook:NASIRUib@cluster0.p9azf.mongodb.net/libry?retryWrites=true&w=majority'
const JWT_SECRET = 'NEED_HERE_A_SECRET_KEY'

mongoose.set('useCreateIndex', true)

console.log('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

const typeDefs = gql`
    type User {
      id: ID
      username: String!
      favoriteGenre: String!
    }

    type Token {
      value: String!
    }

    type Book {
      id: ID!
      title: String!
      published: Int!
      author: Author!
      genres: [String!]!
    }

    type Author {
      id: ID!
      name: String!
      born: Int
      bookCount: Int!
    }

    type Query {
      bookCount: Int!
      authorCount: Int!
      allBooks(author: String, genre: String): [Book!]!
      allAuthors: [Author!]!
      me: User
    }

    type Mutation {
      createUser(username: String!, favoriteGenre: String!): User
      login(username: String!, password: String!): Token
      addBook(
        title: String!
        published: Int!
        author: String!
        genres: [String!]!
      ): Book
      editAuthor(name: String!, setBornTo: Int!): Author
    }

    type Subscription {
      bookAdded: Book!
    }
`
const resolver = {
  Query: {
    me: async (root, args, context) => {
      return context.currentUser
    },
    allBooks: async(root, args,  context) => {
      let author = null
      if (args.author) author = await Author.findOne({ name: args.author })
      if (args.author && !author) return []

      let filter = {}

      if (args.author) filter = { author: author.id }
      if (args.genre) filter = { genres: { $elemMatch: { $eq: args.genre } } }
      if (args.author && args.genre)
        filter = {
          author: author.id,
          genres: { $elemMatch: { $eq: args.genre } },
        }

        return await Book.find(filter).populate('author')
    },
    bookCount: () => Book.collection.countDocuments(),
    authorCount: () => Author.collection.countDocuments(),
    allAuthors: () => Author.find({}),
  },
  Mutation: {
    createUser: async (root, args) => {
      const user = new User({
        username: args.username,
        favoriteGenre: args.favoriteGenre,
      })
      try {
        await user.save()
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      }
      return user
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username })

      if (!user || args.password !== 'secret') {
        throw new UserInputError('wrong credential')
      }

      const userForToken = {
        username: user.username,
        id: user._id,
      }
      return { value: jwt.sign(userForToken, JWT_SECRET) }
    },
    addBook: async (root, args, context) => {
      if (!context.currentUser) {
        throw new AuthenticationError('not authenticated')
      }
      let author = await Author.findOne({ name: args.author })

      if (!author) {
        author = new Author({
          name: args.author,
          id: uuid(),
        })
        try {
          await author.save()
        } catch (error) {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          })
        }
      }
      let book = new Book({
        ...args,
        author: author.id,
        id: uuid(),
      })
      try {
        await book.save()
        const bookCount = await Book.find({
          author: author.id,
        }).countDocuments()
        await Author.findOneAndUpdate(
          { name: author.name },
        )
        book = await book.populate('author').execPopulate()
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      }
      PubSub.publish('BOOK_ADDED', { bookAdded: book })

      return book
    },
    editAuthor: async (root, args, context) => {
      if (!context.currentUser) {
        throw new AuthenticationError('not authenticated')
      }
      let author = await Author.findOne({ name: args.name })
      if (!author) {
        return null
      }
      try {
        author = await Author.findByIdAndUpdate(
          { name: args.name },
          { born: args.setBornTo },
          { new: true }
        )
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      }
      return author
    },
  },
  Subscription: {
    bookAdded: {
      subscribe: () => PubSub.asyncIterator(['BOOK_ADDED'])
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolver,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      const decodedToken = jwt.verify(
        auth.substring(7), JWT_SECRET
      )

      const currentUser = await User
        .findById(decodedToken.id)

      return { currentUser }
    }
  }  
})

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`Server ready at ${url}`)
  console.log(`Subscription ready at ${subscriptionsUrl}`)
})