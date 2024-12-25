import React from 'react';
import './../MetalPlaylist/MetalPlaylist.css'

const MetalPlaylists = () => {
  const heavyMetalPlaylists = [
    {
      title: 'Heavy Metal',
      description: 'A collection of classic heavy metal hits.',
      imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2023/03/metal-songs-1.jpg?w=1581&h=1054&crop=1',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe',
    },
    {
      title: 'This is Dio',
      description: 'Blast through some intense death metal tracks.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPoNh_OcraZn2QBGx6V2DvhFMLNIpZN_QUaw&s',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO2IccrC',
    },
    {
      title: 'This is Iron Maiden',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://www.impericon.com/cdn/shop/articles/20240919_ironmaiden25tour_1.jpg?v=1726728583',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO3KIUZW',
    },
    {
      title: 'This is Megadeth',
      description: 'Blast through some intense death metal tracks.',
      imageUrl: 'https://cdn.britannica.com/08/252308-050-D0C3221F/Members-of-thrash-metal-band-Megadeth-1986.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO17aFuo',
    },
    {
      title: 'This is Slayer',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://i.scdn.co/image/8c81130db7b5f933412c4906c30327817f1e1b43',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO0XObfi',
    },
  ];

  const nuMetalPlaylists = [
    {
      title: 'Nu Metal Hits',
      description: 'A collection of classic nu metal hits.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxn8bj16qz_mQSZM2uwaT5TI0XyfdqpaPqg&s',
      link: 'https://open.spotify.com/playlist/1uxjA99uDMmCciHU5VI759',
    },
    {
      title: 'This is Slipknot',
      description: 'Blast through some intense death metal tracks.',
      imageUrl: 'https://static.independent.co.uk/2022/09/30/14/SK2022%2010%20smr-1.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evNZYGncI',
    },
    {
      title: 'This is Link in Park',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNfvIZtrZkUnep8oFT0vvIvMzoniJdVdKLQ&s',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO47cwRq',
    },
    {
      title: 'This is Mudvayne',
      description: 'Blast through some intense death metal tracks.',
      imageUrl: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/04/mudvaynepress.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO1CYi9G',
    },
    {
      title: 'This is Limp Bizkit',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGZ8uTKwiegSAtkLA9DfZPOKFE7h3nYMCYw&s',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO0AuSbK',
    },
  ];

  const blackMetalPlaylists = [
    {
      title: 'Black Metal Classics',
      description: 'A collection of classic heavy metal hits.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXM9VTuOyxmRuHTolW9CGlc1wJoLdQlRSTIA&s',
      link: 'https://open.spotify.com/playlist/688iTCqxHbpNbBuWplfa17',
    },
    {
      title: 'This is Mayhem',
      description: 'Blast through some intense death metal tracks.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/5/5a/Mayhem_logo.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO03Rj6D',
    },
    {
      title: 'This is Burzum',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://seeklogo.com/images/B/burzum-logo-055311E7AF-seeklogo.com.png',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO4B0OPH',
    },
    {
      title: 'This is Dark Throne',
      description: 'Blast through some intense death metal tracks.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICbzGVQqyY-cOF7T1d-4cmnxznY4HBiO2Eg&s',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO4lgwro',
    },
    {
      title: 'This is Bathory',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://i.pinimg.com/originals/5a/52/7a/5a527a57039b721d1c7e6576bea01d4d.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO3NYdGq',
    },
  ];

  const thrashMetalPlaylists = [
    {
      title: 'Thrash Metal Classics',
      description: 'A collection of classic heavy black hits.',
      imageUrl: 'https://i.ytimg.com/vi/t6lxobh8Vko/maxresdefault.jpg',
      link: 'https://open.spotify.com/playlist/6NrNLU37tyoWuWyDXr2fF3',
    },
    {
      title: 'This is Metallica ',
      description: 'Blast through some intense death metal tracks.',
      imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2021/06/metallica-album-guide.jpg?w=1581&h=1054&crop=1',
      link: 'https://open.spotify.com/intl-tr/artist/2ye2Wgw4gimLv2eAKyk1NB',
    },
    {
      title: 'This is Megadeth',
      description: 'Blast through some intense death metal tracks.',
      imageUrl: 'https://cdn.britannica.com/08/252308-050-D0C3221F/Members-of-thrash-metal-band-Megadeth-1986.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO17aFuo',
    },
    {
      title: 'This is Slayer',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://i.scdn.co/image/8c81130db7b5f933412c4906c30327817f1e1b43',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO0XObfi',
    },
    {
      title: 'This is Pantera',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IROh_YEIJ-KoHZ2O_AXCq2uOeVk8WQCuNQ&s',
      link: 'https://open.spotify.com/intl-tr/artist/14pVkFUHDL207LzLHtSA18',
    },
  ];

  const industrialMetalPlaylists = [
    {
      title: 'Industrial Metal',
      description: 'A collection of classic heavy metal hits.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfFhaj2Q1FhK8shK9Emu__eLBJJQ53v6zVA&s',
      link: 'https://open.spotify.com/playlist/0I4fAd7K0zIHBJYNw9fSuv',
    },
    {
      title: 'This is Rammstein',
      description: 'Blast through some intense death metal tracks.',
      imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2019/05/Rammstein_JensKoch_3105_hires.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO3RbzfW',
    },
    {
      title: 'This is Marilyn Manson',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://cdn.britannica.com/59/261959-050-2A16BB4C/Marilyn-Manson-performs-Aftershock-Festival-Denmark-2019-Sacramento-California.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO1H1lO8',
    },
    {
      title: 'This is Rob Zombie',
      description: 'Blast through some intense death metal tracks.',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/6402ba34433a987790469301/845cac7b-34d6-4ddd-bb5b-a62653a910c0/RZ_BandThumbnail_FB_01.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO29RPTW',
    },
    {
      title: 'This is Static-X',
      description: 'Epic anthems for the powerful metal fan.',
      imageUrl: 'https://metalinsider.net/wp-content/uploads/2023/04/Static_X_2023.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO4A7YBu',
    },
  ];

  

  return (
    <div className="playlist-section">
      <h2>Metal Playlists</h2>
      <h3>Heavy Metal </h3>
      <div className="playlist-list">
        {heavyMetalPlaylists.map((playlist, index) => (
          <div key={index} className="playlist-card">
            <img src={playlist.imageUrl} alt={playlist.title} />
            <h3>{playlist.title}</h3>
            <p>{playlist.description}</p>
            <a href={playlist.link} target="_blank" rel="noopener noreferrer" className="spotify-link">
              <button>Play on Spotify</button>
            </a>
          </div>
        ))}
        <br />
      </div>
        <h3>Nu Metal </h3>
        <div className="playlist-list">
        {nuMetalPlaylists.map((playlist, index) => (
          <div key={index} className="playlist-card">
            <img src={playlist.imageUrl} alt={playlist.title} />
            <h3>{playlist.title}</h3>
            <p>{playlist.description}</p>
            <a href={playlist.link} target="_blank" rel="noopener noreferrer" className="spotify-link">
              <button>Play on Spotify</button>
            </a>
          </div>
        ))}
        <br />
      </div>
      <h3>Thrash Metal </h3>
        <div className="playlist-list">
        {thrashMetalPlaylists.map((playlist, index) => (
          <div key={index} className="playlist-card">
            <img src={playlist.imageUrl} alt={playlist.title} />
            <h3>{playlist.title}</h3>
            <p>{playlist.description}</p>
            <a href={playlist.link} target="_blank" rel="noopener noreferrer" className="spotify-link">
              <button>Play on Spotify</button>
            </a>
          </div>
        ))}
        <br />
      </div>
      <h3>Black Metal</h3>
        <div className="playlist-list">
        {blackMetalPlaylists.map((playlist, index) => (
          <div key={index} className="playlist-card">
            <img src={playlist.imageUrl} alt={playlist.title} />
            <h3>{playlist.title}</h3>
            <p>{playlist.description}</p>
            <a href={playlist.link} target="_blank" rel="noopener noreferrer" className="spotify-link">
              <button>Play on Spotify</button>
            </a>
          </div>
        ))}
        <br />
      </div>
      <h3>Industrial Metal</h3>
        <div className="playlist-list">
        {industrialMetalPlaylists.map((playlist, index) => (
          <div key={index} className="playlist-card">
            <img src={playlist.imageUrl} alt={playlist.title} />
            <h3>{playlist.title}</h3>
            <p>{playlist.description}</p>
            <a href={playlist.link} target="_blank" rel="noopener noreferrer" className="spotify-link">
              <button>Play on Spotify</button>
            </a>
          </div>
        ))}
        <br />
      </div>
    </div>
  );
};

export default MetalPlaylists;
