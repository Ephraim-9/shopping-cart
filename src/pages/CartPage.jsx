import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cartItems.map(({ image, title, price }, index) => (
          <div
            key={index}
            className="w-full max-w-[250px] p-[2%] m-[5%] shadow-md rounded-[14px] flex flex-col items-end transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white"
          >
            <img
              src={image}
              alt={title}
              className="w-full aspect-[1/1] object-contain"
            />
            <h4 className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] transition-transform duration-300 ease-in-out transform hover:whitespace-normal hover:overflow-visible hover:text-ellipsis text-black">
              {title}
            </h4>
            <h5 className="text-lg font-semibold text-black">${price}</h5>
          </div>
        ))
      )}
    </>
  );
}

export default Cart;
