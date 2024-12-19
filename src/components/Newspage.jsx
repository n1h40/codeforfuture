import React from 'react';
import { useParams, Link } from 'react-router-dom';


const newsData = [
  { id: 1, title: 'Metal Legends Unite', description: 'Explore the upcoming rock and metal festival this summer.', content: 'Detailed information about the metal legends festival...', image: 'https://via.placeholder.com/800x400' },
  { id: 2, title: 'Rock Revival', description: 'A deep dive into the resurgence of classic rock bands.', content: 'In-depth analysis of the revival of classic rock...', image: 'https://via.placeholder.com/800x400' },
  { id: 3, title: 'The History of Heavy Metal', description: 'Discover the roots of heavy metal music and its evolution.', content: 'Explore the fascinating history of heavy metal...', image: 'https://via.placeholder.com/800x400' },
  { id: 4, title: 'Top 10 Rock Albums', description: 'The best rock albums of all time. Did your favorite make the list?', content: 'Ranking and reviews of the top 10 rock albums...', image: 'https://via.placeholder.com/800x400' },
  { id: 5, title: 'New Metal Bands', description: 'Check out these up-and-coming metal bands taking the stage.', content: 'Spotlight on new and upcoming metal bands...', image: 'https://via.placeholder.com/800x400' },
  { id: 6, title: 'Guitar Heroes', description: 'Profiles of the most legendary guitarists in rock and metal.', content: 'Detailed profiles of legendary guitarists...', image: 'https://via.placeholder.com/800x400' },
];

const NewsPage = () => {
  const { newsId } = useParams();
  const news = newsData.find((item) => item.id === parseInt(newsId));

  if (!news) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>News Not Found</h1>
        <p>Sorry, the news article you're looking for does not exist.</p>
        <Link to="/" className="backHome">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="newsPage">
      <img src={news.image} alt={news.title} className="newsImage" />
      <h1>{news.title}</h1>
      <p className="newsDescription">{news.description}</p>
      <div className="newsContent">{news.content}</div>
      <Link to="/" className="backHome">Go Back Home</Link>
    </div>
  );
};

export default NewsPage;
