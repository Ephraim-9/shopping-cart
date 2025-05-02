import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10 bg-white">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Elevate Your Shopping <br /> with{" "}
            <span className="text-indigo-600">Smart Deals</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Shop from curated collections of top-quality products.
            Lightning-fast browsing, secure cart management, and seamless
            checkout — all powered by React.
          </p>
          <Link to="/shop">
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjByZW5kZXIlMjBzaG9wcGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Shopping Illustration"
          className="w-full max-w-md rounded-xl shadow-xl"
        />
      </section>

      {/* Featured Products */}
      <section className="px-6 md:px-20 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg mb-4" />
              <h3 className="font-semibold text-lg mb-2">Product Name</h3>
              <p className="text-gray-600">$99.99</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">
              Get your products delivered in record time with our optimized
              logistics.
            </p>
          </div>
          <div>
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold mb-2">Smart Cart</h3>
            <p className="text-gray-600">
              Persistent, interactive cart experience powered by localStorage.
            </p>
          </div>
          <div>
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-semibold mb-2">Secure Checkout</h3>
            <p className="text-gray-600">
              Built with modern tech, your cart and data are always safe and
              private.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
