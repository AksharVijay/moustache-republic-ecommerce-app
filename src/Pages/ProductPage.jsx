import React, { useEffect, useState } from 'react';
import { fetchProduct } from '../services/productApi';
import ProductDetails from '../components/Product/ProductDetails';

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
                    <ProductDetails product={product} />
                </div>
              }
    </div>
  )
}

export default ProductPage;