import React from 'react';
import './Playlists.css'
const Playlists = () => {
  const metalPlaylists = [
    {
      title: 'Heavy Metal Essentials',
      description: 'A collection of classic heavy metal hits.',
      imageUrl: 'https://via.placeholder.com/150?text=Heavy+Metal',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DWYfJjVZ7VVpA', // Replace with actual Spotify link
    },
    {
      title: 'Death Metal Mayhem',
      description: 'Blast through some intense death metal tracks.',
      imageUrl: 'https://via.placeholder.com/150?text=Death+Metal',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DWWIVS7sc36y0', // Replace with actual Spotify link
    },
    {
      title: 'Power Metal Legends',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://via.placeholder.com/150?text=Power+Metal',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DWXmAtm0Knprq', // Replace with actual Spotify link
    },
    {
      title: 'Power Metal Legends',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://via.placeholder.com/150?text=Power+Metal',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DWXmAtm0Knprq', // Replace with actual Spotify link
    },
    {
      title: 'Power Metal Legends',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://via.placeholder.com/150?text=Power+Metal',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DWXmAtm0Knprq', // Replace with actual Spotify link
    },
  ];

  const rockPlaylists = [
    {
      title: 'Classic Rock Hits',
      description: 'Timeless rock anthems from the 70s and 80s.',
      imageUrl: 'https://via.placeholder.com/150?text=Classic+Rock',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DWXbTofH1pNPg', // Replace with actual Spotify link
    },
    {
      title: 'Alternative Rock Vibes',
      description: 'The best of 90s and 00s alternative rock.',
      imageUrl: 'https://via.placeholder.com/150?text=Alternative+Rock',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DX2uNZnJbhpO4', // Replace with actual Spotify link
    },
    {
      title: 'Indie Rock Favorites',
      description: 'Indie rock gems for your next road trip.',
      imageUrl: 'https://via.placeholder.com/150?text=Indie+Rock',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DXa9lxxQmDLGR', // Replace with actual Spotify link
    }, {
      title: 'Power Metal Legends',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://via.placeholder.com/150?text=Power+Metal',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DWXmAtm0Knprq', // Replace with actual Spotify link
    }, {
      title: 'Power Metal Legends',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://via.placeholder.com/150?text=Power+Metal',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DWXmAtm0Knprq', // Replace with actual Spotify link
    },
  ];

  return (
    <div className="playlists-container">
      <h1>Playlists</h1>

      <div className="playlist-section">
        <h2>Metal Playlists</h2>
        <div className="playlist-list">
          {metalPlaylists.map((playlist, index) => (
            <div key={index} className="playlist-card">
              <img src={playlist.imageUrl} alt={playlist.title} />
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
              <a href={playlist.link} target="_blank" rel="noopener noreferrer" className="spotify-link">
                <button>Play on Spotify</button>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="playlist-section">
        <h2>Rock Playlists</h2>
        <div className="playlist-list">
          {rockPlaylists.map((playlist, index) => (
            <div key={index} className="playlist-card">
              <img src={playlist.imageUrl} alt={playlist.title} />
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
              <a href={playlist.link} target="_blank" rel="noopener noreferrer" className="spotify-link">
                <button>Play on Spotify</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlists;
