import React from "react";
import "../../css/product.css";

const ProductDetails = ({ product }) => {
  return (
    <div className="productDetails">
      <div className="productImage">
        <img src={product.imageURL} alt={product.title} />
      </div>

      <div className="productInfo">
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
