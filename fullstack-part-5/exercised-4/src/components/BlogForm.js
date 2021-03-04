import React, {useState} from 'react'
import Notification from './Notification'

const BlogForm = ({ createBlog }) => {
  const [addBlogs, setAddBlogs] = useState(null)
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [newLikes, setNewLikes] = useState('')

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }
  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }
  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }
  const handleLikesChange = (event) => {
    setNewLikes(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: newLikes
    })
    
    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
    setNewLikes('')
    setAddBlogs(`Aded ${newTitle}`)
    setTimeout(() => {
      setAddBlogs(null)
    }, 5000)
  }



  return (
    <div>
      <div className="formDiv"></div>
      <p><Notification  message = {addBlogs} /></p>
      <h2>Create a new blog</h2>
      <form onSubmit={addBlog}>
      Title<input id ='title' value={newTitle} onChange={handleTitleChange}/>
      <p>Author<input id ='author' value={newAuthor}onChange={handleAuthorChange}/></p>
      <p>Url<input id= 'url' value={newUrl} onChange={handleUrlChange}/></p>
      <p>likes<input id ='likes' value={newLikes} onChange={handleLikesChange} /></p>
      <button onClick={addBlog}>addblog</button>
    </form>  
    </div>
  )
}

export default BlogForm