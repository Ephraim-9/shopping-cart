import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product, image, title, price }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  }

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="w-full max-w-[250px] p-[2%] m-[5%] shadow-md rounded-[14px] flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white">
      <img
        src={image}
        alt={title}
        className="w-full aspect-[1/1] object-contain"
      />
      <h4 className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] transition-transform duration-300 ease-in-out transform hover:whitespace-normal hover:overflow-visible hover:text-ellipsis text-black">
        {title}
      </h4>
      <h5 className="text-lg font-semibold text-black">${price}</h5>

      <div className="flex items-center mt-2">
        <button
          onClick={decrement}
          className="bg-gray-100 rounded-md p-1 mx-1 text-black"
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.max(1, Number(e.target.value) || 1))
          }
          className="w-12 text-center border border-gray-300 rounded-md text-black"
        />
        <button
          onClick={increment}
          className="bg-gray-100 rounded-md p-1 mx-1 text-black"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-2 bg-gray-100 text-black rounded-md p-2 hover:bg-gray-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
