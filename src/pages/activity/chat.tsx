import { useState } from 'react'
import jm1 from '../../../public/jm1.svg'
import jr1 from '../../../public/jr1.svg'
import jm2 from '../../../public/jm2.svg'
import jr2 from '../../../public/jr2.svg'
import jm3 from '../../../public/jm3.svg'
import am1 from '../../../public/am1.svg'
import ar1 from '../../../public/ar1.svg'
import am2 from '../../../public/am2.svg'
import ar2 from '../../../public/ar2.svg'
import am3 from '../../../public/am3.svg'
import am4 from '../../../public/am4.svg'
import Image from 'next/image'

interface Props {
  clues: string[]
  userChoices: string[]
  person: number
}

interface Message {
  value: string
  left: boolean
  render: () => React.ReactNode
}

export default function Chat({ clues, userChoices, person }: Props) {
  const [round, setRound] = useState(1)
  const [clueIndex, setClueIndex] = useState(0)
  const [choiceIndex, setChoiceIndex] = useState(0)
  const [messages, setMessages] = useState<Message[]>([])

  const [stage, setStage] = useState(0)
  const jamesChoices = [
    'Sure! What can I help with?',
    'Be more specific.',
    'No thanks.',
    'Sure! Where do I send the money?',
    'Prove you are James.',
    `I won't send money. Can I help another way?`,
  ]
  const angelaChoices = [
    'Sure. What can I help with?',
    'Can we check in person?',
    'No thanks. I’m good.',
    'Why is it a zip file?',
    'I can’t download zip files.',
    'That’s really sus.',
  ]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChoice = async (index: number) => {
    const newMessage: Message = {
      value: clues[clueIndex],
      left: false,
      render: () => <div>{userChoices[index]}</div>,
    }
    setMessages([...messages, newMessage])
    if (round === 1) {
      setClueIndex(clueIndex + 1)
    } else if (round === 2) {
      if (index % 3 === 0) {
        setClueIndex(clueIndex + 1)
      } else {
        setClueIndex(clueIndex + 2)
      }
    }
    setRound(round + 1)
    setChoiceIndex(choiceIndex + 3)
  }

  // useEffect(() => {
  //   // add timeout that adds newly rendered
  //   handleChoice(10)
  //   const replyMessage: Message = {
  //     value: clues[clueIndex],
  //     left: true,
  //     render: () => <div>{clues[clueIndex]}</div>,
  //   }
  //   setMessages([...messages, replyMessage])
  // }, [round])

  const handleSelection = async () => {
    setChoiceIndex((prevIndex) => prevIndex + 3)
    setStage((prevStage) => prevStage + 1)
  }

  if (person == 0 && stage === 0) {
    return (
      <div className="w-full h-full bg-[#FFF7F7]">
        <div className="h-5/6">
          <div className="p-4">
            <Image alt="jm1" src={jm1} />
          </div>
        </div>
        <div className="flex flex-row w-full">
          {jamesChoices.map((choice, i) => {
            if (i >= choiceIndex && i < choiceIndex + 3) {
              return (
                <div key={i} className="pl-5 w-1/3 flex items-stretch">
                  <button
                    className="pl-4 pr-4 h-16 outline outline-2 outline-[#C37370] bg-white rounded-3xl hover:bg-gradient-to-r from-[#EE7C78] to-[#ECA4A2]"
                    key={i}
                    onClick={() => {
                      handleSelection()
                    }}
                  >
                    {choice}
                  </button>
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
  if (person == 0 && stage === 1) {
    return (
      <div className="w-full h-full bg-[#FFF7F7]">
        <div className="h-5/6">
          <div className="p-4">
            <Image alt="jm1" src={jm1} />
          </div>
          <div className="p-4">
            <Image alt="jr1" src={jr1} />
          </div>
          <div className="p-4">
            <Image alt="jm2" src={jm2} />
          </div>
        </div>
        <div className="flex flex-row w-full">
          {round < 3 ? (
            jamesChoices.map((choice, i) => {
              if (i >= choiceIndex && i < choiceIndex + 3) {
                return (
                  <div key={i} className="pl-5 w-1/3 flex items-stretch">
                    <button
                      className="pl-4 pr-4 h-16 outline outline-2 outline-[#C37370] bg-white rounded-3xl hover:bg-gradient-to-r from-[#EE7C78] to-[#ECA4A2]"
                      key={i}
                      onClick={() => {
                        handleSelection()
                      }}
                    >
                      {choice}
                    </button>
                  </div>
                )
              }
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    )
  }
  if (person == 0 && stage === 2) {
    setTimeout(() => {
      setChoiceIndex(0)
      setStage(0)
    }, 5000)
    return (
      <div className="w-full h-full bg-[#FFF7F7]">
        <div className="h-5/6">
          <div className="p-4">
            <Image alt="jm1" src={jm1} />
          </div>
          <div className="p-4">
            <Image alt="jr1" src={jr1} />
          </div>
          <div className="p-4">
            <Image alt="jm2" src={jm2} />
          </div>
          <div className="p-4">
            <Image alt="jr2" src={jr2} />
          </div>
          <div className="p-4">
            <Image alt="jm3" src={jm3} />
          </div>
        </div>
      </div>
    )
  }
  if (person == 1 && stage === 0) {
    return (
      <div className="w-full h-full bg-[#FFF7F7]">
        <div className="h-5/6">
          <div className="p-4">
            <Image alt="am1" src={am1} />
          </div>
        </div>
        <div className="flex flex-row w-full">
          {angelaChoices.map((choice, i) => {
            if (i >= choiceIndex && i < choiceIndex + 3) {
              return (
                <div key={i} className="pl-5 w-1/3 flex items-stretch">
                  <button
                    className="pl-4 pr-4 h-16 outline outline-2 outline-[#C37370] bg-white rounded-3xl hover:bg-gradient-to-r from-[#EE7C78] to-[#ECA4A2]"
                    key={i}
                    onClick={() => {
                      handleSelection()
                    }}
                  >
                    {choice}
                  </button>
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
  if (person == 1 && stage === 1) {
    return (
      <div className="w-full h-full bg-[#FFF7F7]">
        <div className="h-5/6">
          <div className="p-4">
            <Image alt="am1" src={am1} />
          </div>
          <div className="p-4">
            <Image alt="ar1" src={ar1} />
          </div>
          <div className="p-4">
            <Image alt="am2" src={am2} />
          </div>
          <div className="p-4">
            <Image alt="am3" src={am3} />
          </div>
        </div>
        <div className="flex flex-row w-full">
          {round < 3 ? (
            angelaChoices.map((choice, i) => {
              if (i >= choiceIndex && i < choiceIndex + 3) {
                return (
                  <div key={i} className="pl-5 w-1/3 flex items-stretch">
                    <button
                      className="pl-4 pr-4 h-16 outline outline-2 outline-[#C37370] bg-white rounded-3xl hover:bg-gradient-to-r from-[#EE7C78] to-[#ECA4A2]"
                      key={i}
                      onClick={() => {
                        handleSelection()
                      }}
                    >
                      {choice}
                    </button>
                  </div>
                )
              }
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-full h-full bg-[#FFF7F7]">
        <div className="h-5/6">
          <div className="p-4">
            <Image alt="am1" src={am1} />
          </div>
          <div className="p-4">
            <Image alt="ar1" src={ar1} />
          </div>
          <div className="p-4">
            <Image alt="am2" src={am2} />
          </div>
          <div className="p-4">
            <Image alt="am3" src={am3} />
          </div>
          <div className="p-4">
            <Image alt="ar2" src={ar2} />
          </div>
          <div className="p-4">
            <Image alt="am4" src={am4} />
          </div>
        </div>
      </div>
    )
  }
}
