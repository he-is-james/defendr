import Navbar from '@/components/navbar'
import { Persona, User } from '@/interfaces'
import axios from 'axios'
import { useRouter } from 'next/router'
import PersonaMessage from './personamessage'
import { useEffect, useState } from 'react'
import Actionbar from '@/components/actionbar'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function Activity() {
  // TODO: add the redux functionality here
  const userData = useSelector<RootState, User | null>(
    (state: RootState) => state.auth.userData
  )
  const router = useRouter()
  const { id } = router.query
  const personaId = Array.isArray(id) ? id[0] : id

  const url = personaId || '/home'
  let heartCount = 3
  if (userData) {
    if (url === 'friends') {
      heartCount = userData.hearts[0]
    } else if (url === 'strangers') {
      heartCount = userData.hearts[1]
    } else if (url === 'career') {
      heartCount = userData.hearts[2]
    }
  }

  const [persona, setPersona] = useState<Persona | null>(null)

  const createPersona = async () => {
    try {
      const newPersona: Persona = {
        name: 'James He',
        pronouns: 'he/him',
        category: personaId || '',
        scammer: true,
        type: 'message',
        background:
          'James is someone you were close to during your college years, but you never really had a chance to get to know her well. You occasionally run into each other at alumni events, but you both have different lives now and rarely have a chance to catch up.',
        properties: ['21', `4'11`, 'Student', 'Los Angeles'],
        bond: 4,
        prompts: ['In my free time', 'What would I do with 1 million dollars'],
        responses: [
          'Walking around a forest with a bucket hat',
          'A cure for cancer',
        ],
        clues: [
          'Hey sexy',
          'Hey sexy1',
          'Hey sexy2',
          'Hey sexy3',
          'Hey sexy4',
          'Hey sexy5',
          'Hey sexy6',
        ],
        userChoices: [
          'choice1',
          'choice2',
          'choice3',
          'choice4',
          'choice5',
          'choice6',
          'choice7',
          'choice8',
          'choice9',
        ],
        blocked: 0,
        matched: 0,
        misidentified: 0,
      }
      const response = await axios.post(`/api/personas/${id}1`, newPersona)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  const getPersona = async () => {
    try {
      const response = await axios.get(`/api/personas/${id}1`)
      setPersona(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPersona()
  }, [])

  return (
    <div>
      <Navbar />
      <div>
        <button
          onClick={() => {
            createPersona()
          }}
        >
          Test create persona
        </button>
      </div>
      <div>
        {persona ? (
          <PersonaMessage
            name={persona.name}
            pronouns={persona.pronouns}
            background={persona.background}
            properties={persona.properties}
            bond={persona.bond}
            prompts={persona.prompts}
            responses={persona.responses}
          />
        ) : (
          <></>
        )}
      </div>
      <div>
        <div>Chat</div>
        <div>Message</div>
        <div>Options</div>
      </div>
      <div>
        <Actionbar id={url} hearts={heartCount} />
      </div>
    </div>
  )
}
