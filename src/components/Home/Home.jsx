import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import './Home.css';

const Home = () => {
  const newsData = [
    { id: 1, title: 'Metal Legends Unite', description: 'Explore the upcoming rock and metal festival this summer.', image: 'https://via.placeholder.com/200x150', },
    { id: 2, title: 'Rock Revival', description: 'A deep dive into the resurgence of classic rock bands.', image: 'https://via.placeholder.com/200x150', },
    { id: 3, title: 'The History of Heavy Metal', description: 'Discover the roots of heavy metal music and its evolution.', image: 'https://via.placeholder.com/200x150', },
    { id: 4, title: 'Top 10 Rock Albums', description: 'The best rock albums of all time. Did your favorite make the list?', image: 'https://via.placeholder.com/200x150', },
    { id: 5, title: 'New Metal Bands', description: 'Check out these up-and-coming metal bands taking the stage.', image: 'https://via.placeholder.com/200x150', },
    { id: 6, title: 'Guitar Heroes', description: 'Profiles of the most legendary guitarists in rock and metal.', image: 'https://via.placeholder.com/200x150', },
  ];

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }}>
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
    </>
  );
};

export default Home;
