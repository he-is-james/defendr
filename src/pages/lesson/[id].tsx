import Navbar from '@/components/navbar'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Lesson() {
  const router = useRouter()
  const { id } = router.query
  let lesson = ''
  if (typeof id === 'string') {
    lesson = id.charAt(0).toUpperCase() + id.slice(1)
  }

  return (
    <div>
      <Navbar />
      <div>
        <div>Lesson: {lesson}</div>
        <div>Lorem ipsum</div>
      </div>
      <div>
        <div>Common Types of Scams</div>
        <div>Lorem ipsum</div>
      </div>
      <div>
        <div>Let&apos;s Practice</div>
        <div>
          <button>
            <Link href={`/activity/${id}`}>Begin</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
