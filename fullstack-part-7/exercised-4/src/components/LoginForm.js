import React from 'react'
import PropType from 'prop-types'
import { Form, Button, } from 'react-bootstrap'

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
 }) => {
 return (
   <div >
     <Form onSubmit={handleSubmit}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>username</Form.Label>
    <Form.Control type="username"  id='username'value={username}onChange={handleUsernameChange} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>password</Form.Label>
    <Form.Control  id='password'type="password" value={password} onChange={handlePasswordChange}>
    </Form.Control>
  </Form.Group>
    <Button variant="primary" id="login-button" type="submit">
    Submit
  </Button>
</Form>
   </div>
 )
}
LoginForm.PropType = {
  handleSubmit: PropType.func.isRequired,
  handleUsernameChange: PropType.func.isRequired,
  handlePasswordChange: PropType.func.isRequired,
  username: PropType.string.isRequired,
  password: PropType.string.isRequired
}

export default LoginForm