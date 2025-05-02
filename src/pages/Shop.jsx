import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../index.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
      setLoading(false);
    } else {
      fetch("https://dummyjson.com/products")
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((data) => {
          const cleanData = data.products.map((item) => ({
            id: item.id,
            title: item.title.toUpperCase(),
            image: item.thumbnail,
            price: item.price,
          }));

          localStorage.setItem("products", JSON.stringify(cleanData));
          setProducts(cleanData);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <main className="min-h-screen px-4 md:px-16 py-10 bg-gray-50 text-gray-800">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Shop All Products
      </h2>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              product={p}
              title={p.title}
              price={p.price}
              image={p.image}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Shop;
