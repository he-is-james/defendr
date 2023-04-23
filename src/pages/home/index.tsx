import Navbar from '@/components/navbar'
import ProgressComponent from './progress'
import { User } from '@/interfaces'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import lessoncard from '/public/lessoncard.svg'
import friendlogo from '/public/friendlogo.svg'
import strangerlogo from '/public/strangerlogo.svg'
import workplacelogo from '/public/workplacelogo.svg'

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

  const [hoveredF, setHoveredF] = useState(false)
  const [hoveredS, setHoveredS] = useState(false)
  const [hoveredC, setHoveredC] = useState(false)

  return (
    <div>
      <Navbar />
      <div className="flex flex-row pt-6 pr-6 pl-6 ">
        <div className="grid w-2/5 p-8">
          <div className="flex flex-row">
            <div className="pb-1 pr-2">
              <Typography variant="h2" fontFamily="Berkshire Swash">
                Hello,
              </Typography>
            </div>
            <div className="pb-1 pl-2">
              <Typography
                className="text-[#C37370]"
                variant="h2"
                fontFamily="Berkshire Swash"
              >
                {userData?.firstName}
              </Typography>
            </div>
          </div>
          <div className="col-span-2 row-span-4">
            <Typography className="text-[#2E2E2E]" fontFamily="Open Sans">
              Getting scammed can be an emotionally devastating experience, much like
              getting your heart broken. Educate yourself on common scams and be
              vigilant when it comes to giving out personal information or money.
              Start your first lesson!
            </Typography>
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
      <div className="pr-8 pl-8 pb-8">
        <div className="pb-8">
          <Typography variant="h3" fontFamily="Berkshire Swash">
            Lessons
          </Typography>
        </div>
        <div className="flex">
          <div className="flex justify-center relative w-1/3">
            <Link href="/lesson/friends">
              <div className="relative">
                <Image alt="friends image" src={lessoncard} />
                <div
                  className="absolute inset-0 m-auto"
                  onMouseEnter={() => setHoveredF(true)}
                  onMouseLeave={() => setHoveredF(false)}
                >
                  <Image
                    className={`absolute inset-0 m-auto transform ${
                      hoveredF ? '-translate-y-32' : 'translate-y-0'
                    } transition-all duration-300`}
                    alt="friends logo"
                    src={friendlogo}
                  />
                  <div
                    className={`absolute inset-0 flex flex-col justify-center items-center transform ${
                      hoveredF ? 'opacity-100' : 'opacity-0'
                    } transition-all duration-300`}
                  >
                    <Typography
                      className="text-white text-center p-1"
                      fontFamily="Open Sans"
                    >
                      Practice recognizing the warning signs of online scams from
                      people you know.
                    </Typography>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center relative w-1/3">
            <Link href="/lesson/strangers">
              <div className="relative">
                <Image alt="strangers image" src={lessoncard} />
                <div
                  className="absolute inset-0 m-auto"
                  onMouseEnter={() => setHoveredS(true)}
                  onMouseLeave={() => setHoveredS(false)}
                >
                  <Image
                    className={`absolute inset-0 m-auto transform ${
                      hoveredS ? '-translate-y-32' : 'translate-y-0'
                    } transition-all duration-300`}
                    alt="strangers logo"
                    src={strangerlogo}
                  />
                  <div
                    className={`absolute inset-0 flex flex-col justify-center items-center transform ${
                      hoveredS ? 'opacity-100' : 'opacity-0'
                    } transition-all duration-300`}
                  >
                    <Typography
                      className="text-white text-center p-1"
                      fontFamily="Open Sans"
                    >
                      Learn how to stay vigilant when receiving deceiving emails from
                      companies and strangers.
                    </Typography>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center relative w-1/3">
            <Link href="/lesson/workplace">
              <div className="relative">
                <Image alt="workplace image" src={lessoncard} />
                <div
                  className="absolute inset-0 m-auto"
                  onMouseEnter={() => setHoveredC(true)}
                  onMouseLeave={() => setHoveredC(false)}
                >
                  <Image
                    className={`absolute inset-0 m-auto transform ${
                      hoveredC ? '-translate-y-32' : 'translate-y-0'
                    } transition-all duration-300`}
                    alt="workplace logo"
                    src={workplacelogo}
                  />
                  <div
                    className={`absolute inset-0 flex flex-col justify-center items-center transform ${
                      hoveredC ? 'opacity-100' : 'opacity-0'
                    } transition-all duration-300`}
                  >
                    <Typography
                      className="text-white text-center p-1"
                      fontFamily="Open Sans"
                    >
                      Recognize and avoid online scams in a professional context from
                      coworkers and external sources.
                    </Typography>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-8">
        <Typography variant="h3" fontFamily="Berkshire Swash">
          Global Stats
        </Typography>
        <div>MOST BLOCKED</div>
        <div>MOST MATCHED</div>
        <div>MOST DECEIVING</div>
      </div>
    </div>
  )
}
