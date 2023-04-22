import Link from 'next/link'

export default function Blank() {
  return (
    <div>
      <div>Blank</div>
      <button>
        <Link href="/home">Test</Link>
      </button>
    </div>
  )
}
