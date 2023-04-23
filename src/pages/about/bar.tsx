import Link from 'next/link'
// import { db } from '../../../firebase'
// import { collection, addDoc, getDocs } from 'firebase/firestore'
import axios from 'axios'

export default function Bar() {
  const setTest = async () => {
    try {
      const newUser: User = {
        email: 'example@email.com',
        password: 'password',
        firstName: 'james',
        lastName: 'he',
        friendsHearts: 5,
        strangersHearts: 5,
        careersHearts: 5,
      }
      const response = await axios.post('/api/user', newUser)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  const getTests = async () => {
    try {
      const response = await axios.get('/api/user')
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <div>Bar</div>
      <div>
        <button
          onClick={() => {
            setTest()
          }}
        >
          Create Test
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            getTests()
          }}
        >
          Get Test
        </button>
      </div>
      <div>
        <Link href={'/login'}> login </Link>
      </div>
      <div>
        <Link href={'/signup'}> signup </Link>
      </div>
    </div>
  )
}