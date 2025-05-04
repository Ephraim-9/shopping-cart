import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product, mode = "shop" }) => {
  const { addToCart, removeFromCart, handleQuantityChange } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      if (mode === "cart") handleQuantityChange(product.id, newQuantity);
      return newQuantity;
    });
  };

  const decrement = () => {
    setQuantity((prev) => {
      const newQuantity = Math.max(1, prev - 1);
      if (mode === "cart") handleQuantityChange(product.id, newQuantity);
    });
  };

  return (
    <div className="w-full max-w-[250px] p-[2%] m-[5%] shadow-md rounded-[14px] flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full aspect-[1/1] object-contain"
      />
      <h4 className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] transition-transform duration-300 ease-in-out transform hover:whitespace-normal hover:overflow-visible hover:text-ellipsis text-black">
        {product.title}
      </h4>
      <h5 className="text-lg font-semibold text-black">${product.price}</h5>

      <div className="flex items-center mt-2">
        <button
          onClick={decrement}
          className="bg-gray-100 rounded-md p-1 mx-1 text-black"
        >
          -
        </button>

        {mode === "shop" ? (
          <input
            type="text"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, Number(e.target.value) || 1))
            }
            className="w-12 text-center border border-gray-300 rounded-md text-black"
          />
        ) : (
          <input
            type="text"
            value={product.quantity}
            onChange={(e) => {
              setQuantity(Math.max(1, Number(e.target.value) || 1));
              handleQuantityChange(product.id, e.target.value);
            }}
            className="w-12 text-center border border-gray-300 rounded-md text-black"
          />
        )}
        <button
          onClick={increment}
          className="bg-gray-100 rounded-md p-1 mx-1 text-black"
        >
          +
        </button>
      </div>

      {mode === "shop" ? (
        <button
          onClick={() => addToCart(product, quantity)}
          className="mt-2 bg-gray-100 text-black rounded-md p-2 hover:bg-gray-200"
        >
          Add To Cart
        </button>
      ) : (
        <button
          onClick={() => removeFromCart(product)}
          className="mt-2 bg-red-100 text-red-700 rounded-md p-2 hover:bg-red-200"
        >
          Remove From Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
