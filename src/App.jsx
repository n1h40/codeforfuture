import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Store from './components/Store';
import Basket from './components/Basket';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer/Footer';
import Playlists from './pages/Playlists/Playlists'
import NewsPage from './components/Newspage';

const App = () => {
  const [basket, setBasket] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store basket={basket} setBasket={setBasket} />} />
          <Route path="/basket" element={<Basket basket={basket} />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/news/:newsId" element={<NewsPage />} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
