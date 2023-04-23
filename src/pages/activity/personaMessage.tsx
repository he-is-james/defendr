import { Typography } from '@mui/material'
import Image from 'next/image'
import instructions from './../../../public/instructions.svg'

interface Props {
  name: string
  pronouns: string
  background: string
  properties: string[]
  bond: number
  prompts: string[]
  responses: string[]
}

export default function PersonaMessage({
  name,
  pronouns,
  background,
  properties,
  bond,
  prompts,
  responses,
}: Props) {
  return (
    <div className="p-4">
      <div className="flex flex-row">
        <div className="pr-2">
          <Typography variant="h3" fontFamily="Berkshire Swash">
            {name}
          </Typography>
        </div>
        <div className="">
          <Typography fontFamily="Open Sans">{pronouns}</Typography>
        </div>
        <div className="flex justify-end">
          <div className="">
            <button>
              <Image alt="instructions" src={instructions} />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>How you know them</div>
        <div>{background}</div>
      </div>
      <div>
        <div>Age: {properties[0]}</div>
        <div>Height: {properties[1]}</div>
        <div>Occupation: {properties[2]}</div>
        <div>Location: {properties[3]}</div>
      </div>
      <div>CHANGE CHANGE CHANGE CHANGE to image</div>
      <div>
        <div>Bond: {bond}</div>
        <div>
          <div>{prompts[0]}</div>
          <div>{responses[0]}</div>
        </div>
      </div>
      <div>
        <div>{prompts[1]}</div>
        <div>{responses[1]}</div>
      </div>
    </div>
  )
}
