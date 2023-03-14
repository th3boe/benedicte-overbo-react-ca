import { Link } from 'react-router-dom'
import Logo from '../../../images/logo.png'
import Search from '../../Search';
import '../Header/header.m.css'

function Nav() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }

  export default function Header() {
    return (
      <header className="fixed-top">
        <Search />
        <div className="nav-logo">
        <img className="logo" src={Logo} alt="Logo" />
        <Nav />
        </div>
      </header>
    );
  }