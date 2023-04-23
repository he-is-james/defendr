import Link from "next/link";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";

export default function Navbar() {
    const dispatch = useDispatch()

    const handleSignOut = async () => {
        const response = await auth.signOut()
        console.log(response)
        dispatch(logout())
    }
    return(
        <div>
            <div>Defendr</div>
            <div>
                <li>
                    <button>
                        <Link href='/home'>Home</Link>
                    </button>
                </li>
                <li>
                    <button onClick={() => { handleSignOut() }}>
                        <Link href='/'>Sign Out</Link>
                    </button>
                </li>
                <li>About</li>
                <li>User</li>
            </div>

        </div>
    )
}