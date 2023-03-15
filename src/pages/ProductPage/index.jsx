import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import Button from '../../components/Button';
import './product.m.css'

// Product Page function 

export default function ProductPage() {

  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(false);
  const [upsError, setUpsError] = useState(false);

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

      } catch(error) {
        console.log(error);
          setLoader(false);
          setUpsError(true);
      }
    }

  getProduct(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  // Content for the above try and catch!

  if(loader || !product) {
    return (
        <div className='loader'></div>
    )
  }

  if(upsError) {
    return (
        <div className='error-message'>
            Oh no.. There seems to be a problem, please hang on while we look into it!
        </div>
    )
  }

    return (
      <div>
        <div className='product-card'>
          <h1 className='card-header'>{product.title}</h1>
          <div className='product-card-content'>

            <img className='the-product-image' src={product.imageUrl} alt='Product Image' />
            <p>{product.description}</p>

            <div className='product-btn-price'>
              <div className='product-price'>
                {product.price === product.discountedPrice? 
                `$ ${product.price}`: 
                <div><p className='before-discount'>$ {product.price}</p>ON SALE, NOW ONLY<p className="discount">$ {product.discountedPrice}</p></div>}
              </div>
              <div className='add-to-cart-btn'>
                <Button name={'Add to cart'}/>
              </div>
            </div>

          </div>
        </div>

        <div className='review'>
          <h2 className='review-header-card'>Product Reviews</h2>

          <div>

          {product.reviews.length > 0 ? <>
          
            {product.reviews.map((review) => (
              <div className='review-card' key={review}>

                <div>
                  <p className='review-header'>{review.username}</p>
                  <p>{review.description}</p>
                  <p className='review-bold'>Rating: {review.rating}</p>
                </div>

              </div>
            ))} 
            
            </> : <p className='review-card'>No product reviews yet!</p> }

          </div>
        </div>
      </div>
    );
}