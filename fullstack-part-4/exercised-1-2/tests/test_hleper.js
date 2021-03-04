const Blogs = require('../models/blog')

const initialBlogs = [
  {
    title: 'HTML is easy',
    author: 'Nasir Ibrahim Abba',
    url: 'https://fullstackopen.com/en/part4/testing_the_backend',
    likes: '03490943090394'
  },
  {
    title: 'please be a good developer',
    author: 'Nasir Ibrahim Abba',
    url: 'https://fullstackopen.com/en/part4/testing_the_backend',
    likes: '03490943099'
  }
]

const nonExistingId = async () => {
  const blog = new Blogs({ title: 'willremovethissoon'})
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blogs.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb
}
