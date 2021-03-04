import React from 'react'
const Blog = ({ blog }) => (
  <div>
    <h4>
    {blog.title} 
    {blog.author}
    <p>{blog.url}</p>
    </h4>
  </div>
)

export default Blog
