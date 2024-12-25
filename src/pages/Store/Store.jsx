import React, { useState } from 'react';
import './Store.css';

const goods = [
  { id: 1, name: 'Electric Guitar', price: 799, imageUrl: 'https://derosamusic.co.uk/cdn/shop/products/EBP-E375RD_1_b08e2446-be28-4729-a132-ef3e2bc985ec.jpg?v=1702062549', category: 'Rock' },
  { id: 2, name: 'Drum Set', price: 599, imageUrl: 'https://m.media-amazon.com/images/I/71HQVdUysqL.jpg', category: 'Rock' },
  { id: 3, name: 'Metallica Vinyl', price: 49, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ojkSSu9Z5SV_WeRcD3rHN-ZpuOjYhPqufg&s', category: 'Metal' },
  { id: 4, name: 'Black Metal T-Shirt', price: 25, imageUrl: 'https://www.emp.co.uk/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwc09f8fa6/images/3/5/4/1/354148a.jpg?sfrm=png', category: 'Metal' },
  { id: 5, name: 'Punk Rock Poster', price: 15, imageUrl: 'https://image.spreadshirtmedia.com/image-server/v1/products/T1306A1PA2673PT24X2Y3D1017132078W45720H60959/views/1,width=800,height=800,appearanceId=1,backgroundColor=F2F2F2/punk-rock-skull-poster-lettering-poster-18x24.jpg', category: 'Punk Rock' },
  { id: 6, name: 'Classic Rock Vinyl', price: 45, imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_4db1c605-319f-4a3f-ab93-81a300fcf51a?wid=488&hei=488&fmt=pjpeg', category: 'Rock' },
  { id: 7, name: 'Bluetooth Headphones', price: 199, imageUrl: 'https://myhypergear.com/cdn/shop/products/15610-HYG-Vibe-Wireless-Headphones-001_1200x1200.jpg?v=1649707539', category: 'Accessories' },
  { id: 8, name: 'Acoustic Guitar', price: 499, imageUrl: 'https://vintageguitarsrus.com/cdn/shop/products/V130VSB_3_4764d80c-0883-4505-a046-c03f60edd5e8.jpg?v=1643976842', category: 'Rock' },
  { id: 9, name: 'Keyboard Synthesizer', price: 799, imageUrl: 'https://usa.yamaha.com/files/MONTAGE_M8x_o_0001_9573481a0903896f31a789a7d98e27cc.jpg?impolicy=resize&imwid=396&imhei=396', category: 'Electronic' },
  { id: 10, name: 'Jazz Trumpet', price: 699, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7w0U4wzTOH6wJgg8IdAN21750G5DnXDVkJA&s', category: 'Jazz' },
  { id: 11, name: 'Vinyl Record Player', price: 120, imageUrl: 'https://m.media-amazon.com/images/I/71+5aBRlPBL._AC_UF1000,1000_QL80_.jpg', category: 'Accessories' },
  { id: 12, name: 'Rock Band Hoodie', price: 40, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHXM2GSoLUuOc7oGoPRtpQPEfHPeBck5-Tg&s', category: 'Rock' },
  { id: 13, name: 'Heavy Metal Cap', price: 20, imageUrl: 'https://i.etsystatic.com/9735261/r/il/95cf2b/3877591688/il_570xN.3877591688_c516.jpg', category: 'Metal' },
  { id: 14, name: 'Punk Rock Bracelet', price: 12, imageUrl: 'https://m.media-amazon.com/images/I/71X8L2oM+TL._AC_UY1000_.jpg', category: 'Punk Rock' },
  { id: 15, name: 'Electronic Drum Pad', price: 399, imageUrl: 'https://m.media-amazon.com/images/I/71cESjpcrPL.jpg', category: 'Electronic' },
  { id: 16, name: 'Saxophone', price: 850, imageUrl: 'https://saxophoneshop.co.uk/cdn/shop/products/SelmerLaVieBbTenor.jpg?v=1617114632', category: 'Jazz' },
  { id: 17, name: 'Violin', price: 600, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv78kulgz2De6ozmn10GOMt4HoUXs9q8DlSw&s', category: 'Classical' },
  { id: 18, name: 'Rock Band Mug', price: 15, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePKFkQ3W9AEAHlmEYAGCn7uAHk9SYWfYDDw&s', category: 'Accessories' },
  { id: 19, name: 'Harmonica', price: 35, imageUrl: 'https://sc1.musik-produktiv.com/pic-100000121l/hohner-blues-harp-ms-db.jpg', category: 'Blues' },
  { id: 20, name: 'Ukulele', price: 120, imageUrl: 'https://cdn.images.fecom-media.com/FE00015757/images/HE1813879_1426553-HOP-MUS-P01.jpg', category: 'Folk' },
];

const Store = ({ basket, setBasket }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  const filteredGoods = goods.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedByCategory = filteredGoods.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="store-container">
      <h2 className="store-title">Store</h2>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <div className="filter-buttons">
        <button onClick={() => setSelectedCategory('All')} className="filter-btn">All</button>
        <button onClick={() => setSelectedCategory('Rock')} className="filter-btn">Rock</button>
        <button onClick={() => setSelectedCategory('Metal')} className="filter-btn">Metal</button>
        <button onClick={() => setSelectedCategory('Punk Rock')} className="filter-btn">Punk Rock</button>
        <button onClick={() => setSelectedCategory('Electronic')} className="filter-btn">Electronic</button>
        <button onClick={() => setSelectedCategory('Jazz')} className="filter-btn">Jazz</button>
        <button onClick={() => setSelectedCategory('Accessories')} className="filter-btn">Accessories</button>
      </div>

      <div className="product-grid">
        {Object.keys(groupedByCategory).map((category) => (
          <div key={category} className="category-section">
            <h3 className="category-title">{category}</h3>
            <div className="product-cards">
              {groupedByCategory[category].map((item) => (
                <div key={item.id} className="product-card">
                  <img src={item.imageUrl} alt={item.name} className="product-image" />
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-category">{item.category}</p>
                  <p className="product-price">${item.price}</p>
                  <button onClick={() => addToBasket(item)} className="add-to-basket-btn">
                    Add to Basket
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredGoods.length === 0 && <p>No products match your search.</p>}
    </div>
  );
};

export default Store;
