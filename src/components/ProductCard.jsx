import React from "react";
import "./ProductCard.css";

function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt="{title}" className="product-image" />
      <h4 className="product-title">{title}</h4>
      <h6 className="product-price">{price}</h6>
    </div>
  );
}

export default ProductCard;
