import { useState } from "react"
import { login } from "../services/auth.service"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = async () => {
    try {
      const response  =  await login({ username, password })
      dispatch({ type: 'auth/login', payload: response })
      if(response) navigate('/')
      else setError('Invalid credentials')
    } catch (error) {
      setError(`Error during login: ${error}`)
    }
  }

  return (
    <div className="flex flex-col items-center w-screen">
      <div className="lg:w-1/3 w-4/5 mt-10 p-6 border rounded flex flex-col gap-4">
        <h1>Login</h1>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="username">username:</label>
            <input 
              type="text"
              id="username" 
              name="username"
              required
              value={username} 
              onChange={e => setUsername(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required
              value={password}
              onChange={e => setPassword(e.target.value)}/>
          </div>
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  )
}
