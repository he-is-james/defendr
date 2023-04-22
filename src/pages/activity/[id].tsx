import Navbar from "@/components/navbar";
import { Persona } from "@/interfaces";
import axios from "axios";
import { useRouter } from "next/router";

export default function Activity() {
    const router = useRouter()
    const { id } = router.query
    const personaId = Array.isArray(id) ? id[0] : id

    const createPersona = async () => {
        try {
            const newPersona: Persona = {
                name: 'James He',
                category: personaId || '',
                scammer: true,
                type: 'message',
                background: 'James is someone you were close to during your college years, but you never really had a chance to get to know her well. You occasionally run into each other at alumni events, but you both have different lives now and rarely have a chance to catch up.',
                bond: 4,
            }
            const response = await axios.post(`/api/persons/${id}`, newPersona)
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Navbar />
            <div>
                <button>Test create persona</button>
            </div>
            <div>
                <button>Test get persona</button>
            </div>
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