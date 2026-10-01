import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { MusicPlayer } from './components/MusicPlayer';
import { BackgroundEffect } from './components/BackgroundEffect'; // 导入背景组件
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Artworks } from './pages/Artworks';
import { Contact } from './pages/Contact';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider>
      {/* 背景特效：放在最外层，全局生效 */}
      <BackgroundEffect />
      <Router basename="/Resume_ver2">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <BackToTop />
        <MusicPlayer />
      </Router>
    </ThemeProvider>
  );
}

export default App;