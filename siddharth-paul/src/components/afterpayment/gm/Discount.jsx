import React, { useEffect, useState } from "react";
import "./Discount.css";

const Discount = () => {
  const [discount, setDiscount] = useState(null);

  useEffect(() => {
    fetch("https://siddharth-paul.onrender.com/courses/Global-Magnet")
      .then((res) => res.json())
      .then((data) => setDiscount(data.afterPaymentDiscount))
      .catch(() => setDiscount(null));
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">
        {[...Array(5)].map((_, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-text">
              {discount ? `${discount} OFF` : "..."}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discount;
