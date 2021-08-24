import React from 'react';
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
import Footer from '../components/Footer';
import Banner from '../components/TopBanner';

const HomePage = () => {
    return (
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
            <Footer />
        </div>
    )
}

export default HomePage;
