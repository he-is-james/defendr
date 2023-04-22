import { useState } from 'react'
// import { db, auth } from '../../../firebase'
import { auth, db } from '../../../firebase'
import { useRouter } from 'next/router'
import { User } from '@/interfaces'

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignUp = async () => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      if (user) {
        const newUser: User = {
          email,
          firstName: 'James',
          lastName: 'He',
          hearts: [3, 3, 3]
        }
        const response = await db.collection('users').doc(user.uid).set(newUser)
        console.log(response)
        // router.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Sign Up Page</h1>
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
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUpPage
