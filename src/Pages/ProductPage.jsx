import React, { useEffect, useState } from 'react';
import { fetchProduct } from '../services/productApi';

const ProductPage = () => {

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getProduct = async () => {
            try {
                const loadedProduct = await fetchProduct();
                setProduct(loadedProduct);
            } catch (err) {
                console.log(err);
                setError("Failed to load product data");
            } finally{ 
                setLoading(false);
            }}
        
            getProduct();
        
        }, [])
            
  return (
    <div>
         { error  && <div className="error">{error}</div>}
              { loading ? <div className="loading">Loading...</div> :
                <div className="product">
                    <h1>{product.title}</h1>
                    <img src={product.imageURL} alt={product.title} />
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
              }
    </div>
  )
}

export default ProductPage;