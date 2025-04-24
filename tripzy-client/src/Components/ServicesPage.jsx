// src/components/ServicesPage.jsx
import React from 'react';
import './ServicePage.css'; // Import the CSS for styling

function ServicesPage() {
  return (
    <div className="services-page">
      <h2 className="services-title">Our Services</h2>
      <ul className="services-list">
        <li className="service-item">Budget-Based Travel Planning</li>
        <li className="service-item">Live Expense Tracker</li>
        <li className="service-item">Weather-Based Packing List</li>
        <li className="service-item">Smart Travel Suggestions</li>
      </ul>
    </div>
  );
}

export default ServicesPage;
