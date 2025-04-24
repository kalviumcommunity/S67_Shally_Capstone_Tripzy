// src/components/ContactPage.jsx
import React from 'react';
import './ContactPage.css'; // Import the CSS for styling

function ContactPage() {
  return (
    <div className="contact-page">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        We would love to hear from you! Please reach out to us with any questions or feedback.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="input-field" />
        <textarea placeholder="Your Message" className="textarea-field"></textarea>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
