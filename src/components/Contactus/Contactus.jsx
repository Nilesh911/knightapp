import React from 'react'
import QuiryForm from '../QuiryForm/QuiryFrom';
import InfoCard from '../InfoCard/InfoCard';
import './Contactus.css';

function Contactus() {
  return (
    <div className="App">
      <div className="main-content-layout"> {/* New container for side-by-side layout */}
        <InfoCard/>
        <QuiryForm />
      </div>
    </div>
  );
}

export default Contactus
