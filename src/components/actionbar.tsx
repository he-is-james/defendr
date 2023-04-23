import { User } from '@/interfaces'
import { updateUserData } from '@/redux/authSlice'
import { RootState } from '@/redux/store'
import axios from 'axios'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../firebase'
import { useRouter } from 'next/router'
import arrow from '../../public/arrow-down.svg'
import Image from 'next/image'
import { Typography } from '@mui/material'
import heartSVG from '../../public/heart.svg'
import broken from '../../public/brokenheart.svg'

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
  } else if (id === 'workplace') {
    index = 2
  }

  let heartCount = userData?.hearts[index] || 3
  const testArray = [0, 1, 2]

  const handleAction = async (action: string) => {
    if (userData) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      const updatedHearts = [...userData?.hearts]
      if (
        (updatedHearts[index] > 0 && scammer && action === 'match') ||
        (!scammer && action === 'block')
      ) {
        updatedHearts[index] -= 1
        heartCount -= 1
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
      setTimeout(() => {
        setCount((prevCount) => prevCount + 1)
      }, 2000)
    }
    if (count === 3) {
      router.push('/home')
    }
  }

  return (
    <div className="flex flex-row h-16">
      <div className="w-1/3">
        <Link href={`/lesson/${id}`}>
          <div className="flex item-stretch">
            <div className="pl-6 pt-3 self-center">
              <Image alt="arrow back" src={arrow} />
              <Typography>back</Typography>
            </div>
          </div>
        </Link>
      </div>

      <div className="w-1/3 pl-5 flex item-stretch">
        <div className="pt-2 pl-5 pr-15 self-center">
          <button
            className="h-10 pt-2 pb-2 pl-5 pr-5 outline outline-2 rounded-xl outline-[#ED8986] text-[#ED8986]"
            onClick={() => handleAction('block')}
          >
            Block
          </button>
        </div>
        <div className="pt-2 pl-10 self-center">
          <button
            className="h-10 pt-2 pb-2 pl-5 pr-5 bg-[#ED8986] text-white rounded-xl"
            onClick={() => handleAction('match')}
          >
            Match
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap-reverse pl-35">
        {testArray.map((heart, i) => {
          console.log(heartCount)
          if (heart < heartCount) {
            return <Image key={i} alt="heart" src={heartSVG} />
          } else {
            return <Image key={i} alt="broken" src={broken} />
          }
        })}
      </div>
    </div>
  )
}
