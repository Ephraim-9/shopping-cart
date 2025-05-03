import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cartItems.map((p, index) => (
          <ProductCard
            mode="cart"
            key={index}
            id={p.id}
            product={p}
            title={p.title}
            price={p.price}
            image={p.image}
          />
        ))
      )}
    </>
  );
}

export default Cart;
