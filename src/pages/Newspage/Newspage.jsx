import React from 'react';
import { useParams, Link } from 'react-router-dom';
import image1 from './img/MetalLegendsUnite.png';
import image2 from './img/RockRevival.jpg';
import image3 from './img/maxresdefault.jpg';
import image4 from './img/Top10.jpg';
import image5 from './img/Newbands.jpg';
import image6 from './img/GuitarHeroes.jpg';
import './NewsPage.css'



const newsData = [
  { id: 1, title: 'Metal Legends Unite', description: 'Explore the upcoming rock and metal festival this summer.', content: 'Metal Allegiance will be releasing a self-titled album of original material on September 18th 2015 via Nuclear Blast. Featuring a who’s who of Metal and Hard Rock’s musicians, the whole enterprise has been orchestrated by principal partner Mark Menghi and the man (alongside principal songwriters Mike Portnoy, David Ellefson & Alex Skolnick) has assembled the greatest Metal posse the world has ever seen including…..', image: image1 },
  { id: 2, title: 'Rock Revival', description: 'A deep dive into the resurgence of classic rock bands.', content: 'Rock Revival is a cultural movement celebrating the resurgence of classic rock music and its influence on modern sounds. It began gaining traction in the early 2010s as younger audiences discovered legendary bands and their timeless music. Streaming platforms like Spotify and YouTube have played a pivotal role, allowing classics to reach global audiences once again. The revival has also been fueled by the return of vinyl records, with classic albums finding new life in record collections. Fashion trends from the rock era, such as leather jackets, denim, and band tees, are also making a strong comeback, solidifying rocks cultural influence.', image: image2 },
  { id: 3, title: 'The History of Heavy Metal', description: 'Discover the roots of heavy metal music and its evolution.', content: 'The genre’s roots lie in blues-rock and psychedelic rock, with bands like Led Zeppelin, Cream, and Deep Purple experimenting with louder, distorted sounds. However, Black Sabbath, formed in 1968 in Birmingham, England, is often credited as the band that defined metal’s foundation. Their haunting lyrics, downtuned guitars, and ominous themes set them apart from their contemporaries, creating a blueprint for the genre.', image: image3 },
  {
    id: 4,
    title: 'Top 10 Rock Albums',
    description: 'The best rock albums of all time. Did your favorite make the list?',
    content: `
      1. The Doors - The Doors
      2. Sgt. Pepper's Lonely Hearts Club Band - The Beatles
      3. The Dark Side of the Moon - Pink Floyd
      4. Led Zeppelin IV - Led Zeppelin
      5. Exile on Main St. - The Rolling Stones
      6. Nevermind - Nirvana
      7. A Night at the Opera - Queen
      8. Rumours - Fleetwood Mac
      9. Born to Run - Bruce Springsteen
      10. Hotel California - The Eagles
    `,
    image: image4
  }
  ,
  {
    id: 5,
    title: 'New Metal Bands',
    description: 'Check out these up-and-coming metal bands taking the stage.',
    content: `
    1. **Vended** - Sons of Slipknot members, known for their aggressive sound and debut album in 2023.
    2. **Sleep Token** - Mysterious British band blending metal, prog, and R&B.
    3. **Spiritbox** - Canadian band known for their atmospheric metalcore sound.
    4. **Architects** - British band with socially conscious lyrics and an aggressive sound.
    5. **Lorna Shore** - American deathcore band known for their technical musicianship.
    6. **The Halo Effect** - Former In Flames members with a melodic death metal style.
    7. **Employed to Serve** - UK band mixing metalcore and hardcore with socially aware lyrics.
    8. **Sleepwoke** - Doom metal with atmospheric elements, known for their haunting melodies.
    9. **Caskets** - UK-based melodic metalcore band with emotional lyrics.
    10. **Void of Vision** - Australian band blending hardcore with metal, known for intense live shows.
  `,
    image: image5
  }
  ,
  {
    id: 6,
    title: 'Guitar Heroes',
    description: 'Profiles of the most legendary guitarists in rock and metal.',
    content: `
    1. **Jimi Hendrix** - Revolutionized electric guitar playing with his expressive, innovative style.
    2. **Eric Clapton** - Known for his blues-inspired guitar playing and hits like "Layla."
    3. **Jimmy Page** - Led Zeppelin's guitarist, known for his iconic riffs and groundbreaking solos.
    4. **Eddie Van Halen** - Changed the face of rock guitar with his virtuosic technique and "tapping" style.
    5. **Keith Richards** - The Rolling Stones' guitarist, known for his raw, rhythmic playing and iconic riffs.
    6. **Stevie Ray Vaughan** - A virtuoso blues guitarist who brought Texas blues to the mainstream.
    7. **Slash** - Best known for his work with Guns N' Roses, particularly his iconic solos on "Sweet Child O' Mine."
    8. **Tony Iommi** - Black Sabbath's guitarist and the pioneer of heavy metal riffs.
    9. **David Gilmour** - Pink Floyd's lead guitarist, renowned for his emotive solos and use of effects.
    10. **Chuck Berry** - One of the founders of rock ‘n’ roll guitar playing, influencing generations of musicians.
  `,
    image: image6
  }
  ,
];

const NewsPage = () => {
  const { newsId } = useParams();
  const news = newsData.find((item) => item.id === parseInt(newsId));

  if (!news) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }} className='newsPageContainer'>
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
