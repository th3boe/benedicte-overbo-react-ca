import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import Button from "../../components/Button/";
import styles from "./home.module.css";

// URL

const productUrl = "https://api.noroff.dev/api/v1/online-shop";

// Home Page function

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [upsError, setUpsError] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();
  const handleOnClickProduct = (id) => {
    navigate("product/" + id);
  };

  useEffect(() => {
    async function getProducts() {
      try {
        setUpsError(false);
        setLoader(true);

        const response = await fetch(productUrl);
        const json = await response.json();

        setProducts(json);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        setUpsError(true);
      }
    }

    getProducts();
  }, []);

  // Content for the above try and catch!

  if (loader) {
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

  // HomePage content!

  return (
    <div>
      <div className={styles.searchPlacement}>
        <form>
          <label className={styles.labelSearch} for="search" alt="search-icon">
            <BiSearchAlt />
            <span className={styles.visuallyHidden}>Search Label</span>
          </label>
          <input
            id="search"
            type="search"
            placeholder="Search products.. "
            className={styles.searchSize}
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
          ></input>
        </form>
      </div>
      <div className={styles.cardContainer}>
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(searchValue)
          )
          .map((product) => (
            <div key={product.id} className={styles.card}>
              <h1 className={styles.cardHeader}>{product.title}</h1>
              <div className={styles.cardContent}>
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
                <img
                  className={styles.productImage}
                  src={product.imageUrl}
                  alt={product.title}
                />

                <div>
                  {product.price === product.discountedPrice ? (
                    `$ ${product.price}`
                  ) : (
                    <>
                      <span className={styles.discount}>
                        ${product.discountedPrice}{" "}
                      </span>
                      <span className={styles.beforeDiscount}>
                        ${product.price}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div>
                <Button
                  name={"View Product"}
                  onClick={() => handleOnClickProduct(product.id)}
                />
              </div>
              <p className={styles.cardFooter}>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill /> ({product.rating})
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
