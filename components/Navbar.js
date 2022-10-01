import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar () {
    const router = useRouter();
    return <nav>
        <Link href='/'><a>home</a></Link>
        <Link href='/about'><a>about</a></Link>
        <style jsx>{`
            nav {
                background-color : tomato;
            }
            a {
                text-decoration : none;
            }
        `}</style>
    </nav>
}