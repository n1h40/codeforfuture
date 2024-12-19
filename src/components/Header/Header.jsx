import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <header>
      <div>
        <h1 className="title">RocknRolla</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/basket">Basket</Link>
        <Link to="/playlists">Playlists</Link>

        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
