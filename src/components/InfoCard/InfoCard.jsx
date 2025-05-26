import React from 'react';
import './InfoCard.css';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  // FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa';

const  InfoCard = () => {
  return (
    <div className="Infocard-summary-container">
      <div className="Infocard-summary-header">
        <div className="Infocard-social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div className="Infocard-header-clickme">Click me</div>
      </div>

      <div className="Infocard-summary-content">
        <div className="Infocard-profile-image-wrapper">
          <img
            src="https://via.placeholder.com/150"
            alt="Aditya Prajapati"
            className="Infocard-profile-image"
          />
        </div>
        <div className="Infocard-info-section">
          <h2>Aditya Prajapati</h2>
          <p className="Infocard-title">CEO & Business Consultant</p>

          <div className="Infocard-contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>9321608372</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>aditya.d.prajapati987@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaFacebook className="contact-icon" />
              <span>facebook.com/</span>
            </div>
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <span>Infocard.com/</span>
            </div>
          </div>

          <div className="Infocard-summary-text">
            <p>
              <strong>Spreading Joy and Packages Around the Globe</strong>
            </p>
            <p className="quote-start">“</p><br/>
            <p>
              More than just business — we forge global family ties. At{' '}
              <strong>Knight</strong>, every shipment builds a stronger
              relationship. From end-to-end supply chain management to bulk and
              containerised cargo handling, we deliver with care and commitment.
              Our certified quality assurance and inspection processes ensure
              every package meets the highest standards.
            </p>
            <p>Beyond business, we build global bonds.</p>
            <p className="quote-end">”</p>
          </div>
        </div>
      </div>

      <div className="Infocard-summary-footer">
        <span>Professional</span> | <span>Punctual</span> |{' '}
        <span>Reliable</span> | <span>Time Bound</span> |{' '}
        <span>Customer Success</span> | <span>Growing</span>
      </div>
    </div>
  );
};

export default InfoCard;