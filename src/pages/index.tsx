import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function Blank() {
  return (
    <div>
      <Navbar />
      <div>Blank</div>
      <button>
        <Link href="/home">Test</Link>
      </button>
    </div>
  )
}
