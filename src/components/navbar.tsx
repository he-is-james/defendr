import Link from 'next/link'
import Image from 'next/image'
import navbarlogo from '../../public/navbarlogo.svg'
import { Typography } from '@mui/material'

export default function Navbar() {
  return (
    <div className="bg-white flex flex-row h-12 drop-shadow-md">
      <div className="w-8"></div>
      <div className="w-5/6">
        <Image alt="navbar logo" src={navbarlogo} />
      </div>
      <div className="flex flex-row w-1/6 pt-2">
        <div className="w-1/2">
          <Link href="/home">
            <Typography
              className="font-normal text-[#C47370]"
              fontFamily="Open Sans"
            >
              Home
            </Typography>
          </Link>
        </div>
        <div className="w-1/2">
          <Typography className="font-normal text-[#C47370]" fontFamily="Open Sans">
            Profile
          </Typography>
        </div>
      </div>
    </div>
  )
}
