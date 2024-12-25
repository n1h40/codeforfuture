import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from '../src/pages/Home/Home';
import Store from './pages/Store/Store';
import Basket from './pages/Basket/Basket';
import ErrorPage from './pages/ErrorPage';
import Playlists from './pages/Playlists/Playlists';
import NewsPage from './pages/Newspage/Newspage';
import MetalPlaylist from "./pages/Playlists/MetalPlaylist/MetalPlaylist";
import RockPlaylist from "./pages/Playlists/RockPlaylist/RockPlaylist";

const App = () => {
  const [basket, setBasket] = useState([]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store basket={basket} setBasket={setBasket} />} />
          <Route path="/basket"        element={<Basket basket={basket} />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/news/:newsId" element={<NewsPage />} />
          <Route path="/metal" element={<MetalPlaylist />} />
          <Route path="/rock" element={<RockPlaylist />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
