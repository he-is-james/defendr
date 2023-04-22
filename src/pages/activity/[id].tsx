import Navbar from "@/components/navbar";
import { useRouter } from "next/router";

export default function Activity() {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <Navbar />
            <div>
                <div>Persona Name</div>
                <div>
                    <div>Bond</div>
                    <div>Trust</div>
                </div>
                <div>
                    <div>Bio</div>
                    <div>Background</div>
                    <div>Request</div>
                </div>
                <div>
                    Hearts for lesson {id}
                </div>
            </div>
            <div>
                <div>Chat</div>
                <div>block</div>
                <div>match</div>
            </div>
        </div>
    )
}