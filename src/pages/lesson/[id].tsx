import Navbar from '@/components/navbar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconButton, Typography } from '@mui/material'
import lessonsvg from '/public/lesson.svg'
import Image from 'next/image'
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
      <div className="  m-32 flex flex-col">
        <Image alt="lesson page" src={lessonsvg}></Image>
        <div>
          <div className="flex flex-row">
            <Typography
              className="text-left"
              variant="h3"
              fontFamily="Berkshire Swash"
            >
              Let&apos;s Practice
            </Typography>
            {/* <IconButton>
              <InfoIcon></InfoIcon>
            </IconButton> */}
          </div>
          <div>
            <button>
              <Link href={`/activity/${id}`}>Begin</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
