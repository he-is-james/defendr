import { db } from '../../../firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

export default function Bar() {
  const setTest = async () => {
    try {
      const response = await addDoc(collection(db, 'test'), {
        hi: 'hello',
        fun: 'very',
      })
      console.log(response)
      console.log('here2')
    } catch (err) {
      console.log(err)
    }
  }
  const getTests = async () => {
    const querySnapshot = await getDocs(collection(db, 'test'))
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`)
    })
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
    </div>
  )
}
