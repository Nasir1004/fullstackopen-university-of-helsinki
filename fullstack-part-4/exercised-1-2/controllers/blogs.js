const blogRouter = require('express').Router()
const Blogs = require('../models/blog')


// blogRouter.get('/', (request, response) => {
//     Blogs.find({}).then(blogs => {
//       response.json(blogs)
//     })
//   })


blogRouter.get('/', async (request, response) => { 
  const blogs = await Blogs.find({})
  response.json(blogs)
})

blogRouter.post('/', async (request, response) => {
  const body = request.body

    const blog = new Blogs({
       title: body.title,
       author: body.author,
       url: body.url,
       likes: body.likes,
    })
  
  const savedBlog = await blog.save()
  response.json(savedBlog)
})

blogRouter.get('/:id', async (request, response) => {
  const blog = await Blogs.findById(request.params.id)
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
})

blogRouter.delete('/:id', async (request, response) => {
  await Blogs.findByIdAndRemove(request.params.id)
  response.status(204).end()
})



// blogRouter.post('/', (request, response, next) => {
//     const body = request.body
//     if (body.title === undefined) {
//       return response.status(400).json({ error: 'content missing' })
//     }
  
//     const blog = new Blogs({
//        title: body.title,
//        author: body.author,
//        url: body.url,
//        likes: body.likes,
//     })
  
//     blog
//        .save()
//        .then(savedBlog => savedBlog.toJSON())
//        .then(saveAndFormattedBlog   => {
//         response.json(saveAndFormattedBlog)
//       })
//       .catch(error => next(error))
//     })

module.exports = blogRouter