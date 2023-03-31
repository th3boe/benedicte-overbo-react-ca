import { useCart } from "../../../hooks/useCart";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import Logo from "../../../images/logo.png";
import styles from "./header.module.css";

function Nav() {
  return (
    <nav id="navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                borderRadius: isActive ? "20px" : "",
                border: isActive ? "1px solid #208888" : "",
                backgroundColor: isActive ? "#0e4d4d" : "",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return {
                borderRadius: isActive ? "20px" : "",
                border: isActive ? "1px solid #208888" : "",
                backgroundColor: isActive ? "#0e4d4d" : "",
              };
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function CartIcon() {
  const { cart } = useCart();
  return (
    <nav>
      <ul>
        <li className={styles.cartLink}>
          <NavLink
            to="/cart"
            className={styles.cartNav}
            style={({ isActive }) => {
              return {
                borderRadius: isActive ? "20px" : "",
                border: isActive ? "1px solid #208888" : "",
                backgroundColor: isActive ? "#0e4d4d" : "",
              };
            }}
          >
            <BsCart2 />
            <span className={styles.cartTotalItems}>
              {cart.reduce((totalQty, cart) => totalQty + cart.totalItems, 0)}
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default function Header() {
  return (
    <header className={styles.fixedTop}>
      <div className={styles.headerContentDisplay}>
        <img className={styles.logo} src={Logo} alt="ECom-Logo" />
        <Nav />
        <CartIcon />
      </div>
    </header>
  );
}
