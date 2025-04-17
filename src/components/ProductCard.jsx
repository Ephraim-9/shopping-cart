import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ title, price, image }) {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((prev) => prev + 1);
  }

  function decrement() {
    setQuantity((prev) => Math.max(prev - 1, 1));
  }

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h4 className="product-title">{title}</h4>
      <h5 className="product-price">$ {price}</h5>

      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
