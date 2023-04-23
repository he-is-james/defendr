import Navbar from '@/components/navbar'
import ProgressComponent from './progress'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex grow">
        <div className="flex">
          <div>Hello Angela,</div>
          <div>Lorem ipsum dolor sit amet</div>
        </div>
        <div>PROGRESS</div>
        <div className="flex">
          <div className="w-1/3">
            <ProgressComponent size={36} color="red-400" />
          </div>
          <div className="w-1/3">
            <ProgressComponent size={36} color="red-400" />
          </div>
          <div className="w-1/3">
            <ProgressComponent size={36} color="red-400" />
          </div>
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
