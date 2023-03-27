import { useEffect, useState, initialState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { useCart } from "../../hooks/useCart";
import "./product.m.css";

// Product Page function

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(false);
  const [upsError, setUpsError] = useState(false);

  // const [cart, setCart] = useState();

  const { addToCart } = useCart();
  function HandleAddToCartButton() {
    addToCart(product);
  }

  let { id } = useParams();

  useEffect(() => {
    async function getProduct(productUrl) {
      try {
        setLoader(true);
        setUpsError(false);

        const response = await fetch(productUrl);
        const json = await response.json();

        setProduct(json);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
        setUpsError(true);
      }
    }

    getProduct(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  // Content for the above try and catch!

  if (loader || !product) {
    return <div className="loader"></div>;
  }

  if (upsError) {
    return (
      <div className="error-message">
        Oh no.. There seems to be a problem, please hang on while we look into
        it!
      </div>
    );
  }

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  // const handleAddToCart = () => {
  //   console.log("hei");
  //   const cart = localStorage.getItem("cart");

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  // if (cart) {
  //   return JSON.parse(cart);
  // } else {
  //   return initialState;
  // }
  // const arrayy = [];
  // Array.push.apply(arrayy, itemsFromStorage);
  // console.log(
  //   "array: ",
  //   arrayy,
  //   "itemInStorage: ",
  //   itemsFromStorage,
  //   "product: ",
  //   product
  // );
  // const newList = itemsFromStorage.concat(product);
  // console.log("add ", newList);
  // localStorage.setItem("CART", JSON.stringify(product));
  // console.log(itemsFromStorage);
  // };

  // const addToCart = product.id;

  // useEffect(() => {
  //   commerce.cart.retrieve().then((res) => {
  //     setCart(res);
  //   });
  // }, []);

  // Product Page content!

  return (
    <div>
      <div className="product-card">
        <h1 className="card-header">{product.title}</h1>
        <div className="product-card-content">
          <div>
            {product.price === product.discountedPrice ? (
              `$ ${product.price}`
            ) : (
              <>
                <div className="percentage">
                  {Math.round(
                    ((product.price - product.discountedPrice) /
                      product.price) *
                      100
                  )}{" "}
                  % OFF
                </div>
              </>
            )}
          </div>

          <img
            className="the-product-image"
            src={product.imageUrl}
            alt="Product"
          />
          <p>{product.description}</p>

          <div className="product-btn-price">
            <div className="product-price">
              {product.price === product.discountedPrice ? (
                `$ ${product.price}`
              ) : (
                <div>
                  <p className="before-discount">$ {product.price}</p>ON SALE,
                  NOW ONLY
                  <p className="discount">$ {product.discountedPrice}</p>
                </div>
              )}
            </div>
            <div className="add-to-cart-btn">
              <Button
                name={"Add to cart"}
                onClick={() => HandleAddToCartButton()}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="review">
        <h2 className="review-header-card">Product Reviews</h2>

        <div>
          {product.reviews.length > 0 ? (
            <>
              {product.reviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div>
                    <p className="review-header">{review.username}</p>
                    <p>{review.description}</p>
                    <p className="review-bold">Rating: {review.rating} stars</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className="review-card">No product reviews yet!</p>
          )}
        </div>
      </div>
    </div>
  );
}
