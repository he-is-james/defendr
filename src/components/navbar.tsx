import Link from "next/link";

export default function Navbar() {
    return(
        <div>
            <div>Defendr</div>
            <div>
                <li>
                    <button>
                        <Link href='/home'>Home</Link>
                    </button>
                </li>
                <li>About</li>
                <li>User</li>
            </div>

        </div>
    )
}