import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>Home</div>
      <button>
        <Link href="/about">Test</Link>
      </button>
    </div>
  )
}
