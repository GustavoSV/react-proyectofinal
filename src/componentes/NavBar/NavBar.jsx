import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
        <NavLink to="/">
            <h1>Music Vinils</h1>
        </NavLink>
        <nav>
            <ul>
                <li>
                    <NavLink to="/categoria/JAZZ">Jazz</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/POP">Pop</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/ROCK">Rock</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/ROCK EN ESPAÑOL">Rock en español</NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>
        
    </header>
  )
}

export default NavBar