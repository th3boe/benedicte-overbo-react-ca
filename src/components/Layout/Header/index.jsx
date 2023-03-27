import { useState } from "react";
import { useCart } from "../../../hooks/useCart";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo.png";
import { BsCart2 } from "react-icons/bs";
import "../Header/header.m.css";

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

function NavCart() {
  const { cart, products } = useCart();
  return (
    <nav>
      <ul>
        <li className="cart-li">
          <Link to="/cart" className="cart-nav">
            <BsCart2 />
            <span className="cart-number">
              {cart.reduce((totalQty, cart) => totalQty + cart.totalItems, 0)}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default function Header() {
  // const [cartCounter, setCartCounter] = useState(0);

  // const cartCount = () => {
  //   const productsIncart = JSON.parse(localStorage.getItem("CART"));
  //   console.log("item: ", productsIncart);
  //   // setCartCounter(cartCounter + 1);
  //   return productsIncart.count;
  // };

  return (
    <header className="fixed-top">
      <div className="nav-logo">
        <img className="logo" src={Logo} alt="Logo" />
        <Nav />
        <NavCart />
        {/* <p>Produkter i handlekurv: </p> */}
      </div>
    </header>
  );
}
