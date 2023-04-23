import Link from 'next/link'
import Image from 'next/image'
import navbarlogo from '../../public/navbarlogo.svg'
import { Typography } from '@mui/material'

export default function Navbar() {
  return (
    <div className="bg-white flex flex-row h-16 drop-shadow-md sticky top-0">
      <div className="w-8"></div>
      <div className="w-5/6 pt-3">
        <Image alt="navbar logo" src={navbarlogo} />
      </div>
      <div className="flex flex-row w-1/5 pt-2 space-x-8">
        <div className="p-1">
          <Link href="/scamcheck">
            <Typography
              className="font-normal text-[#C47370]"
              fontFamily="Open Sans"
            >
              ScamShield
            </Typography>
          </Link>
        </div>
        <div className="p-1">
          <Link href="/home">
            <Typography
              className="font-normal text-[#C47370]"
              fontFamily="Open Sans"
            >
              Home
            </Typography>
          </Link>
        </div>
        <div className="p-1">
          <Typography className="font-normal text-[#C47370]" fontFamily="Open Sans">
            Profile
          </Typography>
        </div>
      </div>
    </div>
  )
}
