import React from 'react';
import { Link } from 'react-router-dom';
import './Playlists.css';

const Playlists = () => {
  return (
    <div className="playlists-container">
      <h1>Playlists</h1>
      <div className="playlist-navigation">
        <Link to="/metal">
          <button>Metal Playlists</button>
        </Link>
        <Link to="/rock">
          <button>Rock Playlists</button>
        </Link>
      </div>
    </div>
  );
};

export default Playlists;
