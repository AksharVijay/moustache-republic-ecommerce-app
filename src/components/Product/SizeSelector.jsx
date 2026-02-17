import React from "react";

const SizeSelector = ({ sizes, selectedSize, setSelectedSize }) => {
  return (
    <div className="sizeDetails">
      {sizes.map((size) => {
        return (
          <button
            key={size.id}
            className={`sizeButton ${selectedSize?.id === size.id ? "active" : " "}`}
            onClick={() => setSelectedSize(size)}
          >
            {size.label || size.long}
          </button>
        );
      })}
    </div>
  );
};

export default SizeSelector;
