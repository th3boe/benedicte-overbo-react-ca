import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/";
import { RiStarSFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import "./home.m.css";

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

  // HomePage content!

  return (
    <div>
      <div className="search-placement">
        <label className="label-search">
          <BiSearchAlt />
        </label>
        <input
          type="search"
          placeholder="Search products.. "
          className="search-size"
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        ></input>
      </div>
      <div className="card-container">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(searchValue)
          )
          .map((product) => (
            <div key={product.id} className="card">
              <h1 className="card-header">{product.title}</h1>
              <div className="card-content">
                <div>
                  {product.price === product.discountedPrice ? (
                    ""
                  ) : (
                    <>
                      <div className="percentage-home">
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
                  className="product-image"
                  src={product.imageUrl}
                  alt="Product"
                />

                <div>
                  {product.price === product.discountedPrice ? (
                    `$ ${product.price}`
                  ) : (
                    <>
                      <span className="discount">
                        ${product.discountedPrice}{" "}
                      </span>
                      <span className="before-discount">${product.price}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="card-bottom">
                <Button
                  name={"View Product"}
                  onClick={() => handleOnClickProduct(product.id)}
                />
              </div>
              <p className="card-footer">
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
