import AOS from 'aos';
import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import About from '../components/About';
import Awards from '../components/Awards';
import Category from '../components/Category';
import FAQs from '../components/FAQs';
import Gallery from '../components/Gallery';
import Guideline from '../components/Guideline';
import ImportantDates from '../components/ImportantDates';
import Magazine from '../components/Magazine';
import Navigation from '../components/Navigation';
import RulesRegulation from '../components/Rules&Regulation';
import Banner from '../components/TopBanner';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our school contest</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      <div>
        <Navigation />
        <Banner />
        <About />
        <Category />
        <ImportantDates />
        <Awards />
        <Gallery />
        <Magazine />
        <Guideline />
        <FAQs />
        <RulesRegulation />
      </div>
    </div>
  );
}

export default App;