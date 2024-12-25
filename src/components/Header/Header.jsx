import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>       
      <div>
        <h1 className="title">RocknRollaaaa</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/basket">Basket</Link>
        <Link to="/playlists">Playlists</Link>
      </nav>
    </header>
  );
};

export default Header;
