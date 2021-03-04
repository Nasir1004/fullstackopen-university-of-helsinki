const Blog = require('../models/blog')
const User = require('../models/user')


const initialBlogs = [
  {
    title: 'Islam is the most beautifull religion in the world',
    author: 'Nasir ibrahim abba',
    url: 'https://fullstackopen.com/en/part4/token_authentication/',
    likes: '0'
  },
  {
    title: 'Browser can execute only Javascript',
    author: 'Nasir Lawal',
    url: 'https://fullstackopen.com/en/part4/token_authentication/',
    likes: '0'
  }
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon', author: 'nasir abba'})
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb, usersInDb
}