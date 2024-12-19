import React from 'react';

const Basket = ({ basket, setBasket }) => {
  const total = basket.reduce((sum, item) => sum + item.price, 0);

  const removeFromBasket = (itemToRemove) => {
   
    console.log("Removing item: ", itemToRemove);
    
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.filter(item => item.id !== itemToRemove.id);
      console.log("Updated Basket: ", updatedBasket);
      return updatedBasket;
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {basket.map((item) => (
            <li key={item.id} style={{ margin: '10px 0' }}>
              {item.name} - ${item.price}{' '}
              <button
                onClick={() => removeFromBasket(item)}
                style={{
                  backgroundColor: '#ff4747',
                  color: '#fff',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginLeft: '10px',
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
      <button
        style={{
          backgroundColor: '#1db954',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Buy
      </button>
    </div>
  );
};

export default Basket;
