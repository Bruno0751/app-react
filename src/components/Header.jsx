import { Link } from "react-router-dom";
import ReactLogo from "../assets/reactjs-line.png";
import "./../style/Sass.scss";
import Nav from './Nav.jsx'

export default function Header() {
  return (
    <>
      <div id="top-bar">
        <header>
          <Link to="/" id="logo">
            <img src={ReactLogo} alt="logo" />
          </Link>
        </header>
        <Nav />
        {/* <nav>
          <ul>
            <li>
              <Link to="/find">Buscar</Link>
            </li>
            <li>
              <Link to="/insert">Inserir</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </>
  );
}
