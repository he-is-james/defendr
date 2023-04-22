import { useState } from 'react'
// import { db } from '../../../firebase'
import { useRouter } from 'next/router'
import { auth } from '../../../firebase'
import axios from 'axios'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password)
      if (user) {
        const response = await axios.get(`/api/user/${user.uid}`)
        console.log(response.data)
        // router.push('/landing')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
