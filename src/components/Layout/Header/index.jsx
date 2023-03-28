import { useCart } from "../../../hooks/useCart";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import Logo from "../../../images/logo.png";
import styles from "./header.module.css";

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

function CartIcon() {
  const { cart } = useCart();
  return (
    <nav>
      <ul>
        <li className={styles.cartLink}>
          <Link to="/cart" className={styles.cartNav}>
            <BsCart2 />
            <span className={styles.cartTotalItems}>
              {cart.reduce((totalQty, cart) => totalQty + cart.totalItems, 0)}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default function Header() {
  return (
    <header className={styles.fixedTop}>
      <div className={styles.headerContentDisplay}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="Logo" />
        </Link>
        <Nav />
        <CartIcon />
      </div>
    </header>
  );
}
