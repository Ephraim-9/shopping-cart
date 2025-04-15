import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../index.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        setProducts(cleanData);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Shop Page</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="ProductCardGrid">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
