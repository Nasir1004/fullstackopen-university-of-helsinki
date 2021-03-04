import { gql  } from '@apollo/client'

export const ALL_AUTHORS = gql`
query {
    allAuthors {
      name
      born
      id
    }
  }
    `

    
export const ALL_BOOKS = gql`
query {
    allBooks {
      title
      author
      published
    }
  }
    `
export const NEW_BOOK = gql`
mutation newBook($title: String!, $published: Int, $author: String!, $genres: [String!]) {
  addBook (
    title: $title,
    author: $author,
    published: $published,
    genres: $genres
  ) {
    title,
    author
    published
    genres
  }

  }
 
`
export const EDIT_AUTHOR = gql`
  mutation editAuthor($name: String!, $born: Int) {
    editAuthor(name: $name, born: $born) {
      name
      born
    }
  }
`
