// src/components/HomePage.jsx
import React from 'react';
import './HomePage.css'; // Import the CSS for styling

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to Tripzy!</h1>
      <p className="home-description">Your budget-friendly travel companion to plan your ideal trip.</p>
      <button className="cta-button">Start Planning</button>
    </div>
  );
}

export default HomePage;
