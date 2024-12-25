import React from 'react';
import './../RockPlaylist/RockPlaylist.css'


const RockPlaylists = () => {
  const psychedelicRock = [
    {
      title: 'Psychodelic Rock',
      description: 'Timeless rock anthems from the 70s and 80s.',
      imageUrl: 'https://townsquare.media/site/295/files/2021/01/psych.jpg?w=780&q=75',
      link: 'https://open.spotify.com/playlist/4Vwsml29J1OLpAVXLX89z3',
    },
    {
      title: 'This is The Doors',
      description: 'The best of 90s and 00s alternative rock.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4hiqy3qeKPlVmeCOZfP4jMv2A2Xa32VupQ&s',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO19UBIk',
    },
    {
      title: 'This is The Beatles',
      description: 'Indie rock gems for your next road trip.',
      imageUrl: 'https://cdn.britannica.com/92/172992-050-7847C661/The-Beatles-1963.jpg?w=400&h=300&c=crop',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO2iBPiw',
    },
    {
      title: 'This is Tame Impala',
      description: 'The best of 90s and 00s alternative rock.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmocTnod-Yx_Mrik5pLIG6jXbY5U69Oum_eg&s',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO3n0Aus',
    },
    {
      title: 'This is Jimi Hendrix',
      description: 'Indie rock gems for your next road trip.',
      imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-197621-84894709.jpg?w=1581&h=1054&crop=1',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO4cWDcc',
    },
  ];

  const grungeRock = [
    {
      title: '90s Grunge Rock',
      description: 'Timeless rock anthems from the 90s.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBzxuTECAtEzAIIM2uELkfI8sbtvOHW7A7w&s',
      link: 'https://open.spotify.com/playlist/1AHu1KznCUi9drUDx82Tq6',
    },
    {
      title: 'This is Nirvana ',
      description: 'The best of 90s and 00s alternative rock.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/e/e9/Band_Nirvana.jpg/640px-Band_Nirvana.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO3M0Fbi',
    },
    {
      title: 'This is Alice in Chains',
      description: 'Indie rock gems for your next road trip.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Alice_N%27_Chains_1987_photo.jpg/1200px-Alice_N%27_Chains_1987_photo.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO3A3Anm',
    },
    {
      title: 'This is Pearl Jam',
      description: 'The best of 90s and 00s alternative rock.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTDfbno_AbESm1t2yk0e2szmWLEo-F8daZw&s',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO0Q8JGw',
    },
    {
      title: 'This is Sound Garden',
      description: 'Indie rock gems for your next road trip.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70JPhmhlmg861ElBQ8M77F9k8jQctAQb4Vg&s',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO3gsacM',
    },
  ];

  const classicRock = [
    {
      title: 'Rock Classics',
      description: 'Timeless rock anthems from the 70s and 80s.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHXQQPGFAeQWWQ48tk4IGotRviBJroW-f1w&s',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U',
    },
    {
      title: 'This is The Beatles',
      description: 'Indie rock gems for your next road trip.',
      imageUrl: 'https://cdn.britannica.com/92/172992-050-7847C661/The-Beatles-1963.jpg?w=400&h=300&c=crop',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO2iBPiw',
    },
    {
      title: 'This is Jimi Hendrix',
      description: 'Indie rock gems for your next road trip.',
      imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-197621-84894709.jpg?w=1581&h=1054&crop=1',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO4cWDcc',
    }
    ,
    {
      title: 'This is The Who',
      description: 'The best of 90s and 00s alternative rock.',
      imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2020/04/The-Who-GettyImages-84893561-1000x600.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO3BHSzm',
    },
    {
      title: 'This is The Rolling Stones',
      description: 'Indie rock gems for your next road trip.',
      imageUrl: 'https://cdn.britannica.com/41/197341-050-4859B808/The-Rolling-Stones-Bill-Wyman-Keith-Richards-1964.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO19s0CZ',
    },
  ];

  const hardRock = [
    {
      title: 'Hard Rock/Metal',
      description: 'Timeless rock anthems from the 70s and 80s.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJVhKoj9Zp2gIf10kQDYwhVkWC1mwL-Euow&s',
      link: 'https://open.spotify.com/playlist/1GXRoQWlxTNQiMNkOe7RqA',
    },
    {
      title: 'This is Black Sabbath',
      description: 'The best of 90s and 00s alternative rock.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabs.jpg/1200px-Sabs.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO3oYXfO',
    },
    {
      title: 'This is AD/DC',
      description: 'Indie rock gems for your next road trip.',
      imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2020/10/10025-01E-JC-white_group_4559_sRGB.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO49hLQA',
    },
    {
      title: 'This is Scorpions',
      description: 'The best of 90s and 00s alternative rock.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Scorpions_in_Melbourne%2C_Australia_17.10.2016.jpg',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO1cSzqU',
    },
    {
      title: "This is Guns N' Roses",
      description: 'Indie rock gems for your next road trip.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GYhcdK5x7-ShWkhQYo6ZsSD31Pd7viqMrg&s',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO1Ziym4',
    },
  ];

  const punkRock = [
    {
      title: 'Punk Classics',
      description: 'Timeless rock anthems from the 70s and 80s.',
      imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-235222-rs-edit-punk-1401x788.jpg',
      link: 'https://open.spotify.com/playlist/5XEDGTA0v2FGh8O2Qid8BX',
    },
    {
      title: 'This is Misfits',
      description: 'The best of 90s and 00s alternative rock.',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/59066a076b8f5b6083962bff/1556320576061-6T3HCZFBOF8V7ZZ1L4B1/image-asset.png',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO0ECSIM',
    },
    {
      title: 'This is Green Day',
      description: 'Indie rock gems for your next road trip.',
      imageUrl: 'https://entertainmentnow.com/wp-content/uploads/2019/11/green-day-e1572804348842.jpg?w=864',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO4nBpII',
    },
    {
      title: 'This is Ramones',
      description: 'The best of 90s and 00s alternative rock.',
      imageUrl: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/7/12/1405152180551/9fb2ea16-54c8-4699-b1d1-cff33c82400a-2060x1236.jpeg?width=620&quality=85&auto=format&fit=max&s=005bbd147f253935533a171fa27da303',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO0EhHXi',
    },
    {
      title: 'This is The Stooges',
      description: 'Indie rock gems for your next road trip.',
      imageUrl: 'https://i.guim.co.uk/img/media/ce137f7d4b55956478a427981d71aa1a8e57cfb1/0_0_5846_3508/master/5846.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9429c6556eb8f50b9d707b60d3e27893',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO2HpO5O',
    },
  ];

  return (
    <div className="playlist-section">
      <h2>Rock Playlists</h2>
      <br />
      <h3>Psychedelic rock</h3>
      <div className="playlist-list">
        {psychedelicRock.map((playlist, index) => (
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
      <h3>Grunge Rock </h3>
      <div className="playlist-list">
        {grungeRock.map((playlist, index) => (
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
      <h3> Classic Rock</h3>
      <div className="playlist-list">
        {classicRock.map((playlist, index) => (
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
      <h3>Hard Rock</h3>
      <div className="playlist-list">
        {hardRock.map((playlist, index) => (
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
      <h3>Punk Rock</h3>
      <div className="playlist-list">
        {punkRock.map((playlist, index) => (
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
  );
};

export default RockPlaylists;
