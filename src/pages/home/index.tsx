import Navbar from '@/components/navbar'
import ProgressComponent from './progress'
import { User } from '@/interfaces'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import friendsSVG from '/public/friends.svg'

export default function Home() {
  const router = useRouter()
  const userData = useSelector<RootState, User>(
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
      <div className="flex p-6 ">
        <div className="grid w-2/5 p-8">
          <div className="grid space-x-1 grid-cols-2 justify-center w-full">
            <Typography
              className="col-span-1 pb-1"
              variant="h2"
              fontFamily="Berkshire Swash"
            >
              Hello,
            </Typography>
            <Typography
              className="text-[#C37370] pl-10 pb-1"
              variant="h2"
              fontFamily="Berkshire Swash"
            >
              {userData?.firstName}
            </Typography>
          </div>
          <div className="col-span-2 row-span-4">
            Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
            ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor
            sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
            dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
            ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
            ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor
            sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
            dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
            ipsum dolor sit ametLorem ipsum dolor sit amet
          </div>
        </div>
        <div className="flex space-x-1">
          {userData?.hearts.map((heart, i) => {
            return (
              <div key={i} className="w-1/3">
                <ProgressComponent
                  size={36}
                  color="red-400"
                  numLesson={i + 1}
                  numhearts={heart}
                  numPersonas={userData?.progress[i]}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="p-8">
        <Typography variant="h3" fontFamily="Berkshire Swash">
          Begin
        </Typography>
        <div className="flex">
          <div className="w-1/3">
            <button>
              <Link href="/lesson/friends">
                {' '}
                Lesson 1: Friends
                <div>
                  <Image alt="friends image" src={friendsSVG}></Image>
                </div>
              </Link>
            </button>
          </div>
          <div className="w-1/3">
            <button>
              <Link href="/lesson/strangers"> Lesson 2: Strangers </Link>
            </button>
            <div>
              <Image src={friendsSVG}></Image>
            </div>
          </div>
          <div className="w-1/3">
            <button>
              <Link href="/lesson/career"> Lesson 3: Career </Link>
            </button>
            <div>
              <Image alt="friends" src={friendsSVG}></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <Typography variant="h3" fontFamily="Berkshire Swash">
          Global Stats
        </Typography>
        <div>MOST BLOCKED</div>
      </div>
    </div>
  )
}
