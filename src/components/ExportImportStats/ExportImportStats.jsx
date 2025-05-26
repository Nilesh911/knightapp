import React from "react";
import "./ExportImportStats.css";
// import exp_image from '../../assets/experience.png';

const stats = [
  {
    image: "./assets/experience.png",
    value: "1.5+",
    label: "Years of Export Experience",
  },
  {
    image: "./assets/partners.png",
    value: "10+",
    label: "Global Trade Partners",
  },
  {
    image: "./assets/branches.png",
    value: "10+",
    label: "Export Locations Worldwide",
  },
  {
    image: "./assets/disbursal.png",
    value: "99k+",
    label: "Export Value Handled",
  },
];

const ExportImportStats = () => {
  return (
    <div className="export-container">
      <h1 className="export-title">
        <span className="export-main">Global</span>{" "}
        <span className="export-brand">Exports ✈️</span>
      </h1>
      <p className="export-subtitle">Expanding Horizons, Shipping Worldwide!</p>

      <div className="export-card-container">
        {stats.map((stat, index) => (
          <div key={index} className="export-card">
            <img src={stat.image} alt={stat.label} className="export-icon" />
            <h2 className="export-value">{stat.value}</h2>
            <p className="export-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="export-description">
        At Global Exports, we empower international trade with a solid network of logistics, compliance, and financial partners. With more than 1.5 years of expertise, we have successfully shipped goods to over 10 countries, partnering with global leaders in trade. Join us to take your products across the world.
      </p>
    </div>
  );
};

export default ExportImportStats;

