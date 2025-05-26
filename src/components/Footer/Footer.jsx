import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

    
        <div className="footer-logo">
          <img src="/slogo.jpg" alt="Logo" className="logo-img" />
          <div className="brand-text">Import <span className="infinity">∞</span> Export</div>
          <p className="tagline">Bridging Borders, Building Business.</p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Grow With Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h4>Import</h4>
          <ul>
            <li>Cloths</li>
            <li>Raw Spices</li>
            <li>Agricultural Products</li>
            <li>Handicraft Products</li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h4>Export</h4>
          <ul>
            <li>Cloths</li>
            <li>Handicraft Products</li>
            <li>Agricultural Products</li>
            <li>Food materia</li>
            <li>Raw Spices</li>
            <li>Other</li>
          </ul>
        </div>

        <div className="footer-section-social">
          <h4>Socials</h4>
          <div className="social-icons">
            <FaFacebookF onClick={() => window.open('https://www.facebook.com', '_blank')} />
            <FaTwitter onClick={() => window.open('https://www.twitter.com', '_blank')} />
            <FaInstagram onClick={() => window.open('https://www.instagram.com', '_blank')} />
            <FaWhatsapp onClick={() => window.open('https://wa.me/9321608372', '_blank')} />
</div>

          <div className="visit-us">
            <h5>Visit Us</h5>
            <p>Chat With Us in Person at Our Head Office.</p>
            <div className="location">
              <FaMapMarkerAlt />
              <span>A/202 golden City complex,Mira road</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
