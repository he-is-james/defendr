import { useState } from 'react'
// import { db, auth } from '../../../firebase'
import { auth } from '../../../firebase'
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField'
import { Typography, Button } from '@mui/material'
import Link from 'next/link'
import { User } from '@/interfaces'
import logo from '/public/logo.svg'
import Image from 'next/image'
import axios from 'axios'

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const router = useRouter()

  const handleSignUp = async () => {
    if (confirmPassword !== password) {
      throw new Error('Passwords do not match')
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      if (user) {
        const newUser: User = {
          email,
          firstName: firstname,
          lastName: lastname,
          hearts: [3, 3, 3],
          progress: [0, 0, 0],
        }
        await axios.post(`/api/user/${user.uid}`, newUser)
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-br from-red-500 to-red-200 h-screen w-screen">
      <div>
        <div className="content-start mb-12">
          <Image alt="logo image" src={logo} className="mx-auto block mb-3"></Image>
          <Typography
            variant="h8"
            className="flex justify-center"
            fontFamily="Open Sans"
            color="white"
          >
            {' '}
            Stop Letting Scammers Break Your Heart
          </Typography>
        </div>

        <div className="flex space-x-5 mb-4">
          <div className="mb-4 rounded-md bg-white pt-1 pd-1 w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <TextField
              id="outlined-basic"
              label="First"
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
              type="first"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="mb-4 rounded-md bg-white pt-1 pd-1 w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <TextField
              id="outlined-basic"
              label="Last"
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
              type="last"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
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
        <div className="mb-4 rounded-md bg-white pt-1">
          <TextField
            id="outlined-basic"
            label="confirm password"
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            onClick={handleSignUp}
          >
            Sign up
          </Button>
        </div>
        <div className="flex justify-center">
          <Typography fontFamily="Open Sans" color="white">
            {' '}
            Already have an account?{' '}
            <Link
              href="/"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              Sign in
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
