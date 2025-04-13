import React, { useEffect, useState } from "react";

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
        <ul>
          {products.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Shop;
