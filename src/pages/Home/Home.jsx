import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import './Home.css';
import rockImage from './img/MetalUnion.jpg'
import rockImage2 from './img/HeavyMetalHistory.jpg'
import rockImage3 from './img/GuitarHeroes.jpg'
import rockImage4 from './img/NewMetalBands.jpg'
import rockImage5 from './img/RockRevival.jpg'
import rockImage6 from './img/topTenRockAlbums.jpg'
import AlbumImage from './img/SlipknotIowa.jpg'
import AlbumImage2 from './img/TheDoors.jpg'
import AlbumImage3 from './img/LedZeppelin3.jpg'
import AlbumImage4 from './img/Mudvayne.jpg'
import AlbumImage5 from './img/KissDynasty.jpg'
import AlbumImage6 from './img/AcDcBackinBlack.png'

const Home = () => {

  const newsData = [
    { id: 1, title: 'Metal Legends Unite', description: 'Explore the upcoming rock and metal festival this summer.', image: rockImage, },
    { id: 2, title: 'Rock Revival', description: 'A deep dive into the resurgence of classic rock bands.', image: rockImage5, },
    { id: 3, title: 'The History of Heavy Metal', description: 'Discover the roots of heavy metal music and its evolution.', image: rockImage2, },
    { id: 4, title: 'Top 10 Rock Albums', description: 'The best rock albums of all time. Did your favorite make the list?', image: rockImage6, },
    { id: 5, title: 'New Metal Bands', description: 'Check out these up-and-coming metal bands taking the stage.', image: rockImage4, },
    { id: 6, title: 'Guitar Heroes', description: 'Profiles of the most legendary guitarists in rock and metal.', image: rockImage3, },
  ];

  const releasedAlbums = [
    {
      id: 7,
      title: 'Slipknot - Iowa',
      description: '"Iowa" is known for its dark, brutal themes that explore mental anguish, isolation, anger, and destruction. It was heavily influenced by the bands personal experiences during the recording process, including the stress of touring, internal band conflicts, and issues related to substance abuse. The albums themes reflect the emotional intensity of the bands experiences and provide a raw, unfiltered view into their mental states.',
      image: AlbumImage,
      spotifyUrl: 'https://open.spotify.com/album/5Zs0mNCTs73CqPKbZPWFX9'
    },
    {
      id: 8,
      title: 'The Doors - The Doors',
      description: 'The Doors is the self-titled debut album by the American rock band The Doors, released on January 4, 1967. This album is widely regarded as one of the most influential records in rock music history and marked the beginning of The Doors groundbreaking musical career.',
      image: AlbumImage2,
      spotifyUrl: 'https://open.spotify.com/album/1jWmEhn3ggaL6isoyLfwBn'
    },
    {
      id: 9,
      title: 'Led Zeppelin - Led Zeppelin III',
      description: 'Led Zeppelin III is the third studio album by the English rock band Led Zeppelin, released on October 5, 1970. It marked a significant departure from the bands earlier work, featuring a more diverse and experimental sound compared to their first two albums. This record combined elements of folk, blues, and hard rock, showcasing the bands versatility and musical evolution.',
      image: AlbumImage3,
      spotifyUrl: 'https://open.spotify.com/album/6P5QHz4XtxOmS5EuiGIPut'
    },
    {
      id: 10,
      title: 'Mudvayne - L.D.50',
      description: 'L.D. 50 is the debut studio album by the American metal band Mudvayne, released on August 22, 2000. Known for its aggressive and experimental approach to heavy metal, L.D. 50 blends elements of alternative metal, progressive metal, and nu-metal with unique time signatures, intricate rhythms, and deep, philosophical themes. The album marked the band’s entrance into the metal scene, quickly gaining recognition for its bold sound and innovative approach.',
      image: AlbumImage4,
      spotifyUrl: 'https://open.spotify.com/album/79cxLehm2WE9NMIRcJaqK9'
    },
    {
      id: 11,
      title: 'Kiss - Dynasty',
      description: 'Dynasty is the sixth studio album by the American rock band Kiss, released on May 23, 1979. This album marks a significant departure from their earlier sound, embracing a more polished, radio-friendly pop-rock style while still retaining elements of their signature hard rock sound. Dynasty represents a shift towards mainstream appeal, incorporating disco influences and softer, more melodic elements compared to their previous, more bombastic releases.',
      image: AlbumImage5,
      spotifyUrl: 'https://open.spotify.com/album/4FA68GsblSfvKZZRfM1tI1'
    },
    {
      id: 12,
      title: 'AC/DC - Back in Black',
      description: 'Back in Black is the seventh studio album by the Australian rock band AC/DC, released on July 25, 1980. It is one of the most iconic albums in rock history and a landmark in the hard rock genre. Back in Black was the first album recorded with Brian Johnson as the lead vocalist, following the death of the bands original frontman, Bon Scott, in February 1980. The album features a powerful combination of hard rock anthems, high-energy performances, and memorable riffs, solidifying AC/DCs place as one of the greatest rock bands of all time.',
      image: AlbumImage6,
      spotifyUrl: 'https://open.spotify.com/album/6mUdeDZCsExyJLMdAfDuwh'
    }
  ];

  return (
    <>
      <div className='news-header'>
        <h1>Welcome to RocknRolla</h1>
        <p>This page is for metal and rock amateurs. Have fun!!</p>
        <ImageSlider />
      </div>
      <div className="news">
        {newsData.map((news) => (
          <div className="newsBlock" key={news.id}>
            <img src={news.image} alt={news.title} className="newsImage" />
            <div className="newsContent">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <Link to={`/news/${news.id}`} className="readMore">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <h2>Rock & Metal Music Videos</h2>
      <br />
      <div className="videoContainer">
        <iframe
          width="450"
          height="300"
          src="https://www.youtube.com/embed/LQUXuQ6Zd9w"
          allowFullScreen
        ></iframe>
        <iframe
          width="450"
          height="300"
          src="https://www.youtube.com/embed/Rbm6GXllBiw"
          allowFullScreen
        ></iframe>
        <iframe
          width="450"
          height="300"
          src="https://www.youtube.com/embed/3mbBbFH9fAg"
          allowFullScreen
        ></iframe>
        <iframe
          width="450"
          height="300"
          src="https://www.youtube.com/embed/qw2LU1yS7aw"
          title="YouTube video player"
          allowfullscreen
        ></iframe>
        <iframe
          width="450"
          height="300"
          src="https://www.youtube.com/embed/kXYiU_JCYtU"
          title="YouTube video player"
          allowfullscreen
        ></iframe>
        <iframe
          width="450"
          height="300"
          src="https://www.youtube.com/embed/Ue4mNQbj9V4"
          title="YouTube video player"
          allowfullscreen
        ></iframe>
      </div>
      <h2>Released Albums</h2>
      <div className="newsTwo">
        {releasedAlbums.map((news) => (
          <div className='newsTwo'>
            <div key={news.id} className='newsBlockTwo'>
              <div className='newsBlockImage'>
              <img src={news.image} alt={news.title} style={{width:`300px`, heigh:`300px`}}/>
              </div>
              <div className="newsBlockContent">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <br />
                <a href={news.spotifyUrl} target="_blank" rel="noopener noreferrer">
                  Play on Spotify
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </>
  );
};

export default Home;