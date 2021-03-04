import React, {useState} from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog, user, }) => {
  const [showAll, setShowAll] = useState(false)
  // const [like, setLike] = useState(blog.likes)
  const toggleVisibility = () =>{
    setShowAll(!showAll)
  }


  const HandleDelete = async () => {
   if( window.confirm(`Removing blog u are not gona need it!   " by ${blog.author}"`));
   await blogService.Delete(blog.id)
  }

  const HandleLikes = async () => {
    const newlike = {
      id: blog.id,
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1
    }
    console.log(blog.likes)
    console.log(blog.id)
    const returnBlog = await blogService.update(blog.id, newlike)
    return{returnBlog}
  }

  const blogStyle = {
    background: 'white',
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const buttonStyle = {
    marginBottom: 5
  }

  const delteStyle = {
    background: 'blue',
    marginBottom: 0
  }

  if (!showAll) {
    return(
      <div style={blogStyle}>
        {blog.title} {blog.author}
         <button style={buttonStyle} type="button" onClick={toggleVisibility}>
        view</button>
      </div>
    )
  }
  
  return (
    <div style={blogStyle} >
      <div>
        
        {blog.title} {blog.author} { ' ' }
        <button style={buttonStyle} type ="button" onClick={toggleVisibility} >
         hide</button>
      </div>
      {blog.url}
      <div>likes{blog.likes}<button onClick={HandleLikes}>like</button></div>
      <div>
        {/* {user.username} */}
      <button style={delteStyle} onClick={HandleDelete}>delete</button>
      </div>
  </div>
)}

export default Blog
