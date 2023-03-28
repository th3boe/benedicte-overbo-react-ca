import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { RiStarSFill } from "react-icons/ri";
import Button from "../../components/Button";
import styles from "./product.module.css";

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
    return <div className={styles.loader}></div>;
  }

  if (upsError) {
    return (
      <div className={styles.errorMessage}>
        Oh no.. There seems to be a problem, please hang on while we look into
        it!
      </div>
    );
  }

  // Product Page content!

  return (
    <div>
      <div className={styles.productCard}>
        <h1 className={styles.cardHeader}>
          <div>
            {product.price === product.discountedPrice ? (
              ""
            ) : (
              <>
                <div className={styles.percentage}>
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
          {product.title}
        </h1>
        <div className={styles.productCardContent}>
          <img
            className={styles.productImage}
            src={product.imageUrl}
            alt={product.title}
          />
          <p>{product.description}</p>
          <p>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill /> ({product.rating})
          </p>

          <div className={styles.productCardFooter}>
            <div className={styles.productPrice}>
              {product.price === product.discountedPrice ? (
                `$ ${product.price}`
              ) : (
                <div>
                  <p className={styles.beforeDiscount}>$ {product.price}</p>ON
                  SALE, NOW ONLY
                  <p className={styles.discount}>$ {product.discountedPrice}</p>
                </div>
              )}
            </div>
            <div>
              <Button
                name={"Add to cart"}
                onClick={() => HandleAddToCartButton()}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.review}>
        <h2 className={styles.reviewTitle}>Product Reviews</h2>

        <div>
          {product.reviews.length > 0 ? (
            <>
              {product.reviews.map((review) => (
                <div key={review.id} className={styles.reviewCard}>
                  <div>
                    <p className={styles.reviewHeader}>{review.username}</p>
                    <p>{review.description}</p>
                    <p>
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill /> ({review.rating})
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className={styles.noReview}>
              There seems to be no product reviews yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
