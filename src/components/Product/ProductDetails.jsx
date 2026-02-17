import React, { useState } from "react";
import "../../css/product.css";
import SizeSelector from "./SizeSelector";

const ProductDetails = ({ product, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(null);

  const handleSizeSelect = () => {
    if (!selectedSize) {
      setError("Please select a size");
      return;
    }
    setError("");

    addToCart(product, selectedSize);
  };

  return (
    <div className="productDetails">
      <div className="productImage">
        <img src={product.imageURL} alt={product.title} />
      </div>

      <div className="productInfo">
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>

        <div className="sizeSelectorDetails">
          <SizeSelector
            className="sizeSelector"
            sizes={product.sizeOptions}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />

          {error && <div className="error">{error}</div>}

          <button className="addToCartButton" onClick={handleSizeSelect}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
