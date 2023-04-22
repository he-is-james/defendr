import { useRouter } from "next/router";

export default function Lesson() {
    const router = useRouter()
    const { id } = router.query
    let lesson = ''
    if (typeof id === 'string') {
        lesson = id.charAt(0).toUpperCase() + id.slice(1)
    }
    
    return (
        <div>
            <div>
                <div>Lesson: {lesson}</div>
                <div>Lorem ipsum</div>
            </div>
            <div>
                <div>Common Types of Scams</div>
                <div>Lorem ipsum</div>
            </div>
        </div>
    )
}