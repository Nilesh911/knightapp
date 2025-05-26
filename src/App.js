import React from 'react';
import ExportImportStats from './components/ExportImportStats/ExportImportStats';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import QuiryForm from './components/QuiryForm/QuiryFrom';
// import InfoCard from './components/InfoCard/InfoCard';
import Footer from './components/Footer/Footer';
import Contactus from './components/Contactus/Contactus';

function App() {
  return (
    <Router>
        <ExportImportStats/>
        <Contactus/>
        {/* <QuiryForm/> */}
        <Footer/>

        {/* <InfoCard/> */}
        <Routes>
          {/* <Route path='/' element={<Main />} /> */}
        </Routes>
    </Router>
  )
}

export default App
