import { useState } from 'react'
import { useRouter } from 'next/router'
import { auth } from '../../firebase'
import TextField from '@mui/material/TextField'
import { Typography, Button } from '@mui/material'
import Link from 'next/link'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    try {
      console.log(process.env.API_KEY)
      await auth.signInWithEmailAndPassword(email, password)
      router.push('/landing')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-br from-red-400 to-red-200 h-screen w-screen">
      <div className="w-3/12">
        <div className="text-center mb-4">
          <Typography
            variant="h2"
            className="flex justify-center"
            fontFamily="Berkshire Swash"
          >
            Defendr
          </Typography>
        </div>
        <div className="mb-4 rounded-md bg-white pt-1">
          <TextField
            id="outlined-basic"
            label="email"
            variant="standard"
            required
            sx={{
              ml: 1,
              borderRadius: '6px',
              '& .MuiInputLabel-root': {
                marginTop: '-4px',
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </div>
        <div className="mb-4 rounded-md bg-white pt-1">
          <TextField
            id="outlined-basic"
            label="password"
            variant="standard"
            required
            sx={{
              ml: 1,
              borderRadius: '6px',
              '& .MuiInputLabel-root': {
                marginTop: '-4px',
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </div>
        <div className="py-2 rounded ">
          <Button
            variant="contained"
            sx={{
              bgcolor: '#8B5B33',
              color: '#FFFFFF',
              '&:hover': {
                bgcolor: '#6C3F23',
              },
            }}
            className="w-full bg-amber-900"
            onClick={handleLogin}
          >
            Log in
          </Button>
        </div>
        <div className="flex justify-center">
          <Typography>
            {' '}
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              Sign Up
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
