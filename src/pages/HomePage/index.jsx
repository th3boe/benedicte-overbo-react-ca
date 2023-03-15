import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/"
import './home.m.css'

// URL

const productUrl = 'https://api.noroff.dev/api/v1/online-shop';

// Home Page function

export default function HomePage() {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [upsError, setUpsError] = useState(false);

    const navigate = useNavigate()
    const handleOnClickProduct = (id) => {
        navigate("product/" + id)
    }

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

    if(loader) {
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

// HomePage content!

    return (
        <div className='card-container'>
            {products.map((product) => (
                <div key={product.id} className='card'>
                    <h1 className='card-header'>{product.title}</h1>
                    <div className='card-content'>

                        <img className='product-image' src={product.imageUrl} alt='Product Image' />

                        <div>
                            {product.price === product.discountedPrice? 
                            `$ ${product.price}`: 
                            <div><p className="before-discount">$ {product.price}</p>ON SALE, NOW ONLY<p className="discount">$ {product.discountedPrice}</p></div>}
                        </div>

                        <Button name={"View Product"} onClick={() => handleOnClickProduct(product.id)}/> 

                    </div>
                </div>
            ))}
        </div>
    )
}