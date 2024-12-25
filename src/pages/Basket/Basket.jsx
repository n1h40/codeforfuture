import React from 'react';
import './Basket.css';

const Basket = ({ basket, setBasket }) => {
  const removeFromBasket = (item) => {
    setBasket((prevBasket) => prevBasket.filter((basketItem) => basketItem.id !== item.id));
  };

  const handleBuy = () => {
    if (basket.length === 0) {
      alert("Your basket is empty! Add items before buying.");
    } else {
      alert("Thank you for your purchase!");
      setBasket([]);
    }
  };

  const totalPrice = basket.reduce((total, item) => total + item.price, 0);

  return (
    <div className="basket-container">
      <h2 className="basket-header">Your Basket</h2>
      {basket.length === 0 ? (
        <p className="empty-basket">Your basket is empty.</p>
      ) : (
        <div>
          <ul className="basket-list">
            {basket.map((item) => (
              <li key={item.id} className="basket-item">
                <img src={item.imageUrl} alt={item.name} className="basket-image" />
                <div className="basket-details">
                  <h3>{item.name}</h3>
                  <p>Category: {item.category}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromBasket(item)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="basket-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
          <button onClick={handleBuy} className="buy-btn">
            Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
