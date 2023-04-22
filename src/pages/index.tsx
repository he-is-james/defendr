import Navbar from '@/components/navbar'
import Link from 'next/link'
import { Provider } from 'react-redux'
import store from '../redux/store'

export default function Blank() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div>Blank</div>
        <button>
          <Link href="/home">Test</Link>
        </button>
      </div>
    </Provider>
  )
}
