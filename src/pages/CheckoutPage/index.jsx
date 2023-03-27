import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import "./checkout.m.css";

export default function CheckoutPage() {
  const { clearCart, cart, add, remove, wifeSaidNo, getCartTotal } = useCart();

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
                console.log("found product?", product.totalItems);
                return (
                  <div className="cart-card">
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
                        <Button
                          name={"-"}
                          onClick={() => remove(product.id)}
                          disabled={product.totalItems < 1}
                        />
                        <p className="qty-number">{product.totalItems}</p>
                        <Button name={"+"} onClick={() => add(product.id)} />
                      </div>
                      <Button
                        name={"X"}
                        onClick={() => wifeSaidNo(product.id)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p>
              Cart Total: ${" "}
              {cart
                .reduce(
                  (totalSum, cart) =>
                    totalSum +
                    (cart.discountedPrice / cart.totalItems) * cart.totalItems,
                  0
                )
                .toFixed(2)}
            </p>
            <Button name={"Clear Cart"} onClick={clearCart} />
            <Link to="/checkoutSuccess">
              {" "}
              <Button name={"Check Out"} onClick={clearCart} />
            </Link>
          </>
        ) : (
          <div className="no-cart-items">
            <p className="review-card">No items in the cart</p>
            <Link to="/" className="cart-link">
              Return back to the store!
            </Link>
          </div>
        )}
      </div>

      {/* <div>
        {cart.map((id) => {
          const product = cart.find((addedProducts) => addedProducts === id);
          console.log("found product?", product.totalItems);
          return (
            <div className="cart-card">
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
                  <Button
                    name={"-"}
                    onClick={() => remove(product.id)}
                    disabled={product.totalItems < 1}
                  />
                  <p className="qty-number">{product.totalItems}</p>
                  <Button name={"+"} onClick={() => add(product.id)} />
                </div>
                <Button name={"X"} onClick={() => wifeSaidNo(product.id)} />
              </div>
            </div>
          );
        })}
      </div>
      <p>
        Cart Total: ${" "}
        {cart
          .reduce(
            (totalSum, cart) =>
              totalSum +
              (cart.discountedPrice / cart.totalItems) * cart.totalItems,
            0
          )
          .toFixed(2)}
      </p>
      <Button name={"Clear Cart"} onClick={clearCart} />
      <Link to="/checkoutSuccess">
        {" "}
        <Button name={"Check Out"} onClick={clearCart} />
      </Link> */}
    </div>
  );
}
