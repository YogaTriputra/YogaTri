import React, { useState, useEffect } from 'react';
import './App.css';

function slider() {
  const photos = [
    'src/assets/foto/image.png',
    'src/assets/foto/webbfgma.png'
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className = "slider">
      <button onClick={prevSlide}></button>

      {photos.map((photo, index) => (
        <span 
        key={index}
        src={photo}
        className={index === currentIndex ? "active" : ""}
        />
      ))}

      <button onClick={nextSlide}></button>
      <div className = "dots">

      {photos.map((photo, index) => (
        <span 
        key={index}
        src={photo}
        className={index === currentIndex ? "active" : ""}
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
      }
      else {
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
          <p className="about-content"> Seorang mahasiswa Informatika yang lagi sibuk belajar frontend dan dunia desain UI. Aku suka bikin tampilan website yang simpel tapi tetap punya rasa clean, nyaman dilihat, dan enak dipakai.
Sekarang aku lagi fokus belajar HTML, CSS, React, dan eksplor desain di Figma. Kadang ngoding, kadang desain, kadang overthinking layout tapi justru di situ serunya proses belajar.</p>
        </div>
      </section>
    </div>
    
    
  );
}

export default App;