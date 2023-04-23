import { User } from '@/interfaces'
import { updateUserData } from '@/redux/authSlice'
import { RootState } from '@/redux/store'
import axios from 'axios'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../firebase'

interface Props {
  id: string
  scammer: boolean
}

export default function Actionbar({ id, scammer }: Props) {
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
      if ((scammer && action === 'match') || (scammer && action === 'block')) {
        updatedHearts[index] -= 1
      }
      // eslint-disable-next-line no-unsafe-optional-chaining
      const updatedProgress = [...userData?.progress]
      updatedProgress[index] += 1
      const updatedUserData: User = {
        ...userData,
        hearts: updatedHearts,
        progress: updatedProgress,
      }
      dispatch(updateUserData(updatedUserData))
      const userId = await auth.currentUser?.uid
      await axios.post(`/api/user/${userId}`, updatedUserData)
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
