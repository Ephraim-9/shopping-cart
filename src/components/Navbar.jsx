import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/shopping-cart-logo.jpg";
import cart from "../assets/add-to-cart.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div>
        <img src={logo} alt="logo" className="h-18 rounded-full " />{" "}
      </div>

      {/* Navigation Links Section */}
      <div className="space-x-6">
        <Link to="/" className="text-m hover:text-gray-400">
          Home
        </Link>
        <Link to="/shop" className="text-m hover:text-gray-400">
          Shop
        </Link>
      </div>

      {/* Cart Icon Section */}
      <div className="flex items-center">
        <Link to="/cart">
          <img
            src={cart}
            alt="add to cart"
            className="h-8 w-8 cursor-pointer hover:opacity-50"
          />
          <span className="absolute top-6 right-0 text-black rounded-full w-5 h-5 flex items-center justify-center text-s">
            {totalItems}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
