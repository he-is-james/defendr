import { score } from '@/components/score'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { useEffect, useState } from 'react'
interface ProgressComponent {
  size: number
  color: string
  numhearts: number
  numLesson: number
  numPersonas: number
}

const ProgressComponent: React.FC<ProgressComponent> = ({
  size,
  color,
  numhearts,
  numLesson,
  numPersonas,
}) => {
  function selectScore(heart: number, progress: number) {
    const combo = '' + heart + progress
    console.log('combo is ', combo, 'type of', typeof combo)
    switch (combo) {
      case '03':
        return score.score03
      case '12':
        return score.score12
      case '13':
        return score.score13
      case '21':
        return score.score21
      case '22':
        return score.score22
      case '23':
        return score.score23
      case '31':
        return score.score31
      case '32':
        return score.score32
      case '30':
        return score.score30
      case '33':
        return score.score33 //TODO add 3/0, 3/1, 3/2
    }
  }
  function selectLesson(numLesson: number) {
    switch (numLesson) {
      case 1:
        return 'Friends'
      case 2:
        return 'Strangers'
      case 3:
        return 'Career'
    }
  }
  return (
    <div className="grid grid-rows-2 max-h-96 content-center">
      <div className="row-span-1">
        <Image alt="score" src={selectScore(numhearts, numPersonas)}></Image>
      </div>
      <div className="row-span-1">
        <Typography
          className="text-center content-center"
          variant="h4"
          fontFamily="Berkshire Swash"
        >
          {selectLesson(numLesson)}
        </Typography>
      </div>
    </div>
  )
}
export default ProgressComponent
