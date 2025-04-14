import React from "react";

function ProductCard({ id, title, price, image }) {
  return (
    <div className={id}>
      <img src={image} alt="{title}" />
      <h3>{title}</h3>
      <h6>{price}</h6>
    </div>
  );
}

export default ProductCard;
