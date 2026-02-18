import React, { useEffect, useState } from "react";
import { fetchProduct } from "../services/productApi";
import ProductDetails from "../components/Product/ProductDetails";
import MiniCart from "../components/Cart/MiniCart";
import Header from "../components/Layout/Header";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
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
      (item) => item.size.id === selectedSize.id,
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
        {
          id: product.id,
          title: product.title,
          image: product.imageURL,
          price: product.price,
          size: {
            id: selectedSize.id,
            label: selectedSize.label || selectedSize.long,
          },
          quantity: 1,
        },
      ]);
    }
  };

  const toggleCart = () => {
    console.log("Toggling cart");
    setCartOpen((prev) => !prev);
  };

  return (
    <div>
      <Header cartItems={cartItems} toggleCart={toggleCart} />
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="product">
          <ProductDetails product={product} addToCart={addToCart} />
        </div>
      )}
      {isCartOpen && <MiniCart cartItems={cartItems} />}
    </div>
  );
};

export default ProductPage;
