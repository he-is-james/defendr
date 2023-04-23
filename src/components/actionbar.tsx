import Link from 'next/link'

interface Props {
  id: string
  hearts: number
}

export default function Actionbar({ id, hearts }: Props) {
  return (
    <div>
      <div>
        <button>
          <Link href={`/lesson/${id}`}>back</Link>
        </button>
      </div>
      <div>
        <button>Block</button>
      </div>
      <div>
        <button>Match</button>
      </div>
      <div>Hearts: {hearts}</div>
    </div>
  )
}
