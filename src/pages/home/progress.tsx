import { useState } from 'react'
import { useRouter } from 'next/router'
import { auth } from '../../firebase'
import TextField from '@mui/material/TextField'
import { Typography, Button } from '@mui/material'

interface ProgressComponent {
  size: number
  color: string
}

const ProgressComponent: React.FC<ProgressComponent> = ({ size, color }) => {
  return (
    <div
      className={`flex justify-center items-center w-${size} h-${size} rounded-full bg-${color} text-white text-lg`}
      style={{ lineHeight: `${size}px`, fontSize: `${size * 0.4}px` }}
    >
      progress
    </div>
  )
}
export default ProgressComponent
