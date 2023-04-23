import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { logout } from '@/redux/authSlice'

const dispatch = useDispatch()

const handleSignOut = async () => {
  const response = await auth.signOut()
  console.log(response)
  dispatch(logout())
}

;<button
  onClick={() => {
    handleSignOut()
  }}
>
  <Link href="/">Sign Out</Link>
</button>
