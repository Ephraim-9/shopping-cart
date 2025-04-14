import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetch data from fakestoreapi
    fetch("https://fakestoreapi.com/products")
      // 2. Convert to JSON
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      // 3. Set it in state
      .then((data) => {
        const cleanData = data.map((item) => {
          const newItem = {
            id: item.id,
            title: item.title.toUpperCase(),
            image: item.image,
            price: item.price,
          };
          return newItem;
        });
        setProducts(cleanData);
      })
      .finally(() => setLoading(false));
    // 4. Handle loading
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
