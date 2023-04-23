import { score } from '@/components/score'
import Image from 'next/image'
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
      case '01':
        return score.score01
      case '02':
        return score.score02
      case '03':
        return score.score03
      case '11':
        return score.score11
      case '12':
        return score.score12
      case '13':
        return score.score13
      case '22':
        return score.score22
      case '23':
        return score.score23
      case '33':
        return score.score33
    }
  }
  return (
    <div>
      <div>
        <div
          className={`flex justify-center items-center w-${size} h-${size} rounded-full bg-${color} text-white text-lg`}
          style={{ lineHeight: `${size}px`, fontSize: `${size * 0.4}px` }}
        >
          You have {numhearts} hearts left.
        </div>
        <div>Lesson {numLesson}</div>
        <div> Personas done: {numPersonas}</div>
      </div>
      <div>
        <Image alt="score" src={selectScore(1, 1)}></Image>
      </div>
    </div>
  )
}
export default ProgressComponent
