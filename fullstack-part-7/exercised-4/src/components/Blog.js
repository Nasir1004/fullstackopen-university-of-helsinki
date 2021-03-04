import React, {useState} from 'react'
import blogService from '../services/blogs'
import { Card,  Button, Nav, Form } from 'react-bootstrap'

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

  if (!showAll) {
    return(
      <div>
        <Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
    {blog.title} {blog.author}
    </Card.Text>
    <Button variant="outline-secondary" onClick={toggleVisibility}>view</Button>{' '}
  </Card.Body>
</Card>
    
      </div>
    )
  }
  
  return (
    <div>
      <Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
      <Nav.Item>
      <Button variant="outline-primary"onClick={toggleVisibility}>hide </Button>
      </Nav.Item>
      <Nav.Item>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
    {blog.title} {blog.author} { ' ' }
    </Card.Text>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
    <Button variant="primary"onClick={HandleLikes}>like</Button>{'  '}
    {blog.likes}
    <Button variant="outline-danger" onClick={HandleDelete}>Delete</Button>{'  '}
  </Card.Body>
</Card>
  </div>
)}

export default Blog
