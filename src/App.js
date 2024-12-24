import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SurahList from './components/SurahList';
import AyahDisplay from './components/AyahDisplay';
import './styles/Navbar.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/surahlist" element={<SurahList />} />
            <Route path="/surah/:id" element={<AyahDisplay />} /> {/* Update this route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
