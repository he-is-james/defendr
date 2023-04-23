import { User } from '@/interfaces'
import { updateUserData } from '@/redux/authSlice'
import { RootState } from '@/redux/store'
import axios from 'axios'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../firebase'
import { useRouter } from 'next/router'

interface Props {
  id: string
  scammer: boolean
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export default function Actionbar({ id, scammer, count, setCount }: Props) {
  const router = useRouter()
  const userData = useSelector((state: RootState) => state.auth.userData)
  const dispatch = useDispatch()

  let index = 0
  if (id === 'strangers') {
    index = 1
  } else if (id === 'career') {
    index = 2
  }

  const handleAction = async (action: string) => {
    if (userData) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      const updatedHearts = [...userData?.hearts]
      if (
        (updatedHearts[index] > 0 && scammer && action === 'match') ||
        (!scammer && action === 'block')
      ) {
        updatedHearts[index] -= 1
      }
      // eslint-disable-next-line no-unsafe-optional-chaining
      const updatedProgress = [...userData?.progress]
      if (updatedProgress[index] < 3) {
        updatedProgress[index] += 1
      }
      const updatedUserData: User = {
        ...userData,
        hearts: updatedHearts,
        progress: updatedProgress,
      }
      dispatch(updateUserData(updatedUserData))
      const userId = await auth.currentUser?.uid
      await axios.post(`/api/user/${userId}`, updatedUserData)
      setCount((prevCount) => prevCount + 1)
    }
    if (count === 3) {
      router.push('/home')
    }
  }

  return (
    <div>
      <div>
        <button>
          <Link href={`/lesson/${id}`}>back</Link>
        </button>
      </div>
      <div>
        <button onClick={() => handleAction('block')}>Block</button>
      </div>
      <div>
        <button onClick={() => handleAction('match')}>Match</button>
      </div>
      <div>Hearts: {userData?.hearts[index]}</div>
    </div>
  )
}
