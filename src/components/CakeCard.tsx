import React, { useState } from "react";
import { DessertItem } from "../types";

interface DessertCardProps {
  item: DessertItem;
}

const DessertCard: React.FC<DessertCardProps> = ({ item }) => {
  const [count, setCount] = useState(0);

  const handleOrderClick = () => {
    setCount(1);
  };

  const handleDecrease = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const total = count * item.price;

  return (
    <div className="showcase-card">
      <div className="showcase-card-image">
        <img className="showcase-image" src={item.image} alt={item.title} />
      </div>
      <div className="showcase-name">{item.title}</div>
      <div className="showcase-description">
        {item.description.split("\n").map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
      </div>
      <div className="showcase-price">{item.price} ₽/шт.</div>
      <div className="showcase-actions">
        {count === 0 ? (
          <button type="button" className="showcase-order-button" onClick={handleOrderClick}>
            Заказать
          </button>
        ) : (
          <div className="qty-control">
            <div className="qty-control-box">
              <button
                type="button"
                className="qty-control-button"
                onClick={handleDecrease}
              >
                −
              </button>
              <span className="qty-control-value">{count}</span>
              <button
                type="button"
                className="qty-control-button"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <div className="qty-control-total">{total} ₽</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DessertCard;
