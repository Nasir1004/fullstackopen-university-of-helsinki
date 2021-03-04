import React from 'react'
import PropType from 'prop-types'
const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
 }) => {
 return (
   <div>
     <h2>Login</h2>

     <form onSubmit={handleSubmit}>
       <div>
         
         username
         <input
           id='username'
           value={username}
           onChange={handleUsernameChange}
         />
       </div>
       <div>
         password
         <input
           id='password'
           type="password"
           value={password}
           onChange={handlePasswordChange}
         />
     </div>
     <button id="login-button" type="submit">
          login
        </button>
     </form>
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