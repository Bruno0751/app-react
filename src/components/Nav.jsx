import { Link } from 'react-router-dom';
import './../style/Sass.scss'

export default function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/find">Buscar</Link></li>
                    <li><Link to="/insert">Inserir</Link></li>
                </ul>
            </nav>
        </>
    )
}