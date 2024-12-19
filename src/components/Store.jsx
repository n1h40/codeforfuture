import React from 'react';

const goods = [
  { id: 1, name: 'Electric Guitar', price: 799, imageUrl: 'https://via.placeholder.com/200x200?text=Guitar', category: 'Rock' },
  { id: 2, name: 'Drum Set', price: 599, imageUrl: 'https://via.placeholder.com/200x200?text=Drums', category: 'Rock' },
  { id: 3, name: 'Metallica Vinyl', price: 49, imageUrl: 'https://via.placeholder.com/200x200?text=Vinyl', category: 'Metal' },
  { id: 4, name: 'Black Metal T-Shirt', price: 25, imageUrl: 'https://via.placeholder.com/200x200?text=T-Shirt', category: 'Metal' },
  { id: 5, name: 'Punk Rock Poster', price: 15, imageUrl: 'https://via.placeholder.com/200x200?text=Poster', category: 'Punk Rock' },
  { id: 6, name: 'Classic Rock Vinyl', price: 45, imageUrl: 'https://via.placeholder.com/200x200?text=Classic+Rock+Vinyl', category: 'Rock' },
  { id: 7, name: 'Classic Rock Vinyl', price: 45, imageUrl: 'https://via.placeholder.com/200x200?text=Classic+Rock+Vinyl', category: 'Rock' },
];

const Store = ({ basket, setBasket }) => {
  const addToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Store</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {goods.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: '#f1f1f1',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <button
              onClick={() => addToBasket(item)}
              style={{
                backgroundColor: '#1db954',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
                transition: 'background-color 0.3s',
              }}
            >
              Add to Basket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
