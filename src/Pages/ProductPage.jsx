import React, { useEffect, useState } from "react";
import { fetchProduct } from "../services/productApi";
import ProductDetails from "../components/Product/ProductDetails";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
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
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, []);

  const addToCart = (product, selectedSize) => {
    const existingItem = cartItems.find(
      (item) =>
        item.size.id === selectedSize.id,
    );
    if (existingItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.size.id === selectedSize.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems((prev) => [
        ...prev,
        { product, selectedSize, quantity: 1 },
    ]);
    }
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="product">
          <ProductDetails product={product} addToCart={addToCart}/>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
