import { useEffect, useState } from 'react'

interface Props {
  clues: string[]
  userChoices: string[]
}

interface Message {
  value: string
  left: boolean
  render: () => React.ReactNode
}

export default function Chat({ clues, userChoices }: Props) {
  const [round, setRound] = useState(1)
  const [clueIndex, setClueIndex] = useState(0)
  const [choiceIndex, setChoiceIndex] = useState(0)
  const [messages, setMessages] = useState<Message[]>([])

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

  useEffect(() => {
    // add timeout that adds newly rendered
    const replyMessage: Message = {
      value: clues[clueIndex],
      left: true,
      render: () => <div>{clues[clueIndex]}</div>,
    }
    setMessages([...messages, replyMessage])
  }, [round])

  return (
    <div>
      <div>
        <div>{clues[0]}</div>
        <div>
          {messages.map((message, i) => {
            return <div key={i}>{message.render()}</div>
          })}
        </div>
      </div>
      <div>
        {round < 3 ? (
          userChoices.map((choice, i) => {
            if (i >= choiceIndex && i < choiceIndex + 3) {
              return (
                <button
                  key={i}
                  onClick={() => {
                    handleChoice(i)
                  }}
                >
                  {choice}
                </button>
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
