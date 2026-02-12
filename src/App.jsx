import React, { useState, useEffect } from 'react';
import './App.css';

import img1 from './assets/foto/image.png';
import img2 from './assets/foto/figmades.png';
import profile1 from './assets/foto/WhatsApp Image 2026-02-06 at 11.27.37 PM.jpeg';
import profile2 from './assets/foto/5306de7472434ba88ce1e518d96b3e0f.jpg';
import githubIcon from './assets/foto/github_PNG80.png';

function Slider() {
  const photos = [img1, img2];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="slider">
      <div className="slide-container">
        <button className="nav-btn prev" onClick={prevSlide}>&#10094;</button>
        {photos.map((photo, index) => (
          <img 
            key={index}
            src={photo}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            alt={`Slide ${index + 1}`}
          />
        ))}
        <button className="nav-btn next" onClick={nextSlide}>&#10095;</button>
      </div>
      
      <div className="dots">
        {photos.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}


function Topnav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`topnav ${scrolled ? 'scrolled' : ''}`}>
      <a className="active" href="#home">Home</a>
      <a href="#about">About Me</a>
      <a href="#contact">Contact</a>
    </div>
  );
}

function App() {
  const photos = [
    profile1,
    profile2
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div>
      <Topnav />

      <section id="home" className="hero-container">
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
          <h1 className="name">Hai manteman! kenalin namaku Yoga Setia Triputra dan aku Suka mencoba hal-hal baru 👋</h1>
          <p className="content">Aku adalah salah satu mahasiswa aktif Universitas Amikom Yogyakarta. Aku sedang mempelajari dunia frontend dan suka design tampilan UI di Figma</p>
        </div>
      </section>

      <section id="about" className="about-container">
        <div className="about-section">
          <h1 className="work-content"> Design Showcase</h1>
          <Slider />
          <p className="about-content"> Saya Seorang mahasiswa Informatika yang lagi sibuk belajar frontend dan dunia desain UI. Aku suka bikin tampilan website yang simpel tapi tetap punya rasa clean, nyaman dilihat, dan enak dipakai.
Sekarang aku lagi fokus belajar HTML, CSS, React, dan eksplor desain di Figma. Kadang ngoding, kadang desain, kadang overthinking layout tapi justru di situ serunya proses belajar.</p>
        </div>
      </section>

      <section id="contact" className="contact-container">
        <h1 className="github"> My Social Media </h1>
        <div className="contact-section">
          <img src={githubIcon} alt="GitHub" />
          <a href="https://github.com/YogaTriputra">
          <h2 className="github">My Github</h2>
          </a>
        </div>
      </section>
    </div>
    
  );
}

export default App;