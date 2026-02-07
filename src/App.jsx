import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const photos = [
    "src/assets/foto/WhatsApp Image 2026-02-06 at 11.27.37 PM.jpeg",
    "src/assets/foto/5306de7472434ba88ce1e518d96b3e0f.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="main-wrapper">
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </div>

      <section className="hero-container">
        <div className="photo-section">
          {photos.map((photo, index) => (
            <img 
              key={index} 
              src={photo} 
              alt="Foto Profil" 
              className={`foto ${index === currentIndex ? 'active' : ''}`} 
            />
          ))}
        </div>
        <div className="hero-section">
          <h2 className="name">Hai manteman! kenalin namaku Yoga Setia Triputra dan aku Suka mencoba hal-hal baru 👋</h2>
          <p className="content">Aku adalah salah satu mahasiswa aktif Universitas Amikom Yogyakarta. Aku sedang mempelajari dunia frontend dan suka design tampilan UI di Figma</p>
        </div>
      </section>
    </div>
  );
}

export default App;