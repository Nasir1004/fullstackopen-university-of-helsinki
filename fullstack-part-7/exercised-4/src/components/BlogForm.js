import React, {useState} from 'react'
import Notification from './Notification'
import { Form, Button, } from 'react-bootstrap'

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
  <div >
    <p><Notification  message = {addBlogs} /></p>
      <h2>Create a new blog</h2>
    <Form onSubmit={addBlog} className="container">
      <Form.Group>
      <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={newTitle}
          onChange={handleTitleChange}
        />
        <Form.Label>Author:</Form.Label>
        <Form.Control
          type="text"
          name="Author"
          value={newAuthor}
          onChange={handleAuthorChange}
        />
        <Form.Label>url:</Form.Label>
        <Form.Control
          type="url"
          name="url"
          value={newUrl}
          onChange={handleUrlChange}
        />
        <Form.Label>likes:</Form.Label>
        <Form.Control
          type="number"
          name="likes"
          value={newLikes}
          onChange={handleLikesChange}
        />
        <Button variant="primary" type="submit"onClick={addBlog}>
          login
        </Button>
      </Form.Group>
    </Form>
  </div>
)}


export default BlogForm