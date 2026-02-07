import React from 'react';
import './App.css';
function App() {
return (

  <div className = "main-wrapper">
<div className = "topnav">
    <a className ="active" href="#home">Home</a>
    <a href = "#about">About Me</a>
    <a href = "#contact">Contact</a>
  </div>

  <section className = "hero-container">
  <div className = "photo-section">
  <img src="src/assets/foto/WhatsApp Image 2026-02-06 at 11.27.37 PM.jpeg" alt="Foto Profil" className = "foto"/>
  </div>
    <div className = "hero-section">
      <h2 className = "name">HAI! kenalin nama ku Yoga Setia Triputra</h2>
      <p className = "content">Aku adalah salah satu mahasiswa aktif Universitas Amikom Yogyakarta. Aku sedang mempelajari dunia frontend dan suka design tampilan UI di Figma</p>
      </div>
      </section>
  </div>
  );
}

export default App;