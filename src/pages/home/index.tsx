import Navbar from '@/components/navbar'
import { User } from '@/interfaces'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const router = useRouter()
  const userData = useSelector<RootState, User | null>(
    (state: RootState) => state.auth.userData
  )

  useEffect(() => {
    if (!userData) {
      router.push('/')
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <div>Hello {userData?.firstName},</div>
          <div>Lorem ipsum dolor sit amet</div>
        </div>
        <div>
          {userData?.hearts.map((heart, i) => {
            return (
              <div key={i}>
                Lesson {i + 1}: {heart} hearts remaining
              </div>
            )
          })}
        </div>
        <div>
          {userData?.progress.map((progress, i) => {
            return (
              <div key={i}>
                Progress {i + 1}: {progress} out of 3 personas finished
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <div>Begin</div>
        <div>
          <button>
            <Link href="/lesson/friends"> Lesson 1: Friends </Link>
          </button>
        </div>
        <div>
          <button>
            <Link href="/lesson/strangers"> Lesson 2: Strangers </Link>
          </button>
        </div>
        <div>
          <button>
            <Link href="/lesson/career"> Lesson 3: Career </Link>
          </button>
        </div>
      </div>
      <div>
        <div>Global Stats</div>
        <div>MOST BLOCKED</div>
      </div>
    </div>
  )
}
