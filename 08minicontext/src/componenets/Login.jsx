import React from 'react'
import UserContext from '../context/UserContext'
export const Login = () => {
    const [password, setPassword] = React.useState('')
    const [username, setUsername] = React.useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit= ()  => {
      
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type='password'
        value={password} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}
