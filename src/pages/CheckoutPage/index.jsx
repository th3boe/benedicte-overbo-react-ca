import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import "./checkout.m.css";

// Function getting information from useCart hook containing "if" statement showing either "products if added to cart" or the statement "No items in the cart yet."

export default function CheckoutPage() {
  const { cart, clearCart, add, remove, wifeSaidNo } = useCart();

  return (
    <div>
      <h1 className="center-title">CART</h1>
      <div>
        {cart.length > 0 ? (
          <>
            <div>
              {cart.map((id) => {
                const product = cart.find(
                  (addedProducts) => addedProducts === id
                );
                return (
                  <div className="cart-card">
                    <div className="remove-product-x">
                      <div onClick={() => wifeSaidNo(product.id)}>X</div>
                    </div>
                    <div className="justify-cart-items">
                      <img
                        className="cart-product-image"
                        src={product.imageUrl}
                        alt="Product"
                      />
                      <div>
                        <h2>{product.title}</h2>
                        <p>$ {product.discountedPrice}</p>
                      </div>
                      <div className="qty-counter">
                        <Button name={"-"} onClick={() => remove(product.id)} />
                        <p className="qty-number">{product.totalItems}</p>
                        <Button name={"+"} onClick={() => add(product.id)} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <p>
                You save: ${" "}
                {cart
                  .reduce(
                    (totalSaved, cart) =>
                      totalSaved +
                      (cart.price - cart.discountedPrice / cart.totalItems) *
                        cart.totalItems,
                    0
                  )
                  .toFixed(2)}
              </p>
              <p>Shipping: $ 0.00</p>
            </div>
            <div className="price-display">
              <p>
                Cart Total: ${" "}
                {cart
                  .reduce(
                    (totalSum, cart) =>
                      totalSum +
                      (cart.discountedPrice / cart.totalItems) *
                        cart.totalItems,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>
            <Button name={"Clear Cart"} onClick={clearCart} />
            <Link to="/checkoutSuccess">
              {" "}
              <Button name={"Check Out"} onClick={clearCart} />
            </Link>
          </>
        ) : (
          <div className="no-cart-items">
            <p>You currently have no items in the cart.</p>
            <Link to="/" className="cart-link">
              Return back to the store!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
