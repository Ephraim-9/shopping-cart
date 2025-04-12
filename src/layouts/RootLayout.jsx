import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/shop">Shop</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}
