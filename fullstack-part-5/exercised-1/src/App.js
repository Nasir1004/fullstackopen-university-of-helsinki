import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'


const ErrorNotification = ({ErrorMessage}) =>{
  if (ErrorMessage === null){
  return null
  }
  return(
    <div className='error'>
      {ErrorMessage}
    </div>
  )
}

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newTitile, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [newLikes, setNewLikes] = useState('')
  const [addBlogs, setAddBlogs] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null) 

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: newTitile,
      author: newAuthor,
      url: newUrl,
      likes: newLikes
    }

    blogService
       .create(blogObject)
       .then(returnBlogs => {
         setBlogs(blogs.concat(returnBlogs))
         setNewTitle('')
         setNewAuthor('')
         setNewUrl('')
         setNewLikes('')
         setAddBlogs(`Aded ${newTitile}`)
         setTimeout(() => {
           setAddBlogs(null)
         }, 5000)

       })

  }

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
  const handleLogout = (event) => {
    window.localStorage.removeItem(
      'loggedBlogappUser'
    ) 
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      
      console.log(window.localStorage)
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <h1>login to application</h1>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>      
  )

  const blogForm = () => (
    <form onSubmit={addBlog}>
      Title<input
        value={newTitile}
        onChange={handleTitleChange}
      />
     <p> Author<input
        value={newAuthor}
        onChange={handleAuthorChange}
      /></p>
      <p>Url<input
        value={newUrl}
        onChange={handleUrlChange}
      /></p>
       <p>likes<input
        value={newLikes}
        onChange={handleLikesChange}
      /></p>
      <button onClick={addBlog}>addblog</button>
    </form>  
  )
  return (
    <div>
      <ErrorNotification ErrorMessage={errorMessage} />
      {user === null ?
        loginForm() :
        <div>
          <h2>Blogs</h2>
          <h4>{user.username} logged-in <button onClick={handleLogout}>logout</button></h4>
          <p><Notification  message = {addBlogs} /></p>
          {blogForm()}
        </div>
          }

      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App