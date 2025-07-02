import { Link } from 'react-router-dom';
import './../style/Sass.scss'

export default function Header() {
    return (
        <>
            <header>
                <Link to="/" id="logo">LOGO</Link>
            </header>
        </>
    )
}
