import React, { useState } from 'react';
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
    const [state, setState] = useState(
        {
            home: false,
            about: false,
            category: false,
            essay: false,
            awards: false,
            gallery: false,
            magazines: false,
            guideline: false,
            faqs: false,
        }
    )

    const refHandler = (value) => {
        if (value === 'home') {
            setState({
                home: true,
                about: false,
                category: false,
                essay: false,
                awards: false,
                gallery: false,
                magazines: false,
                faqs: false,
            })
        } else if (value === 'about') {
            setState({
                home: false,
                about: true,
                category: false,
                essay: false,
                awards: false,
                gallery: false,
                magazines: false,
                faqs: false,
            })
        } else if (value === 'category') {
            setState({
                home: false,
                about: false,
                category: true,
                essay: false,
                awards: false,
                gallery: false,
                magazines: false,
                faqs: false,
            })
        } else if (value === 'essay') {
            setState({
                home: false,
                about: false,
                category: false,
                essay: true,
                awards: false,
                gallery: false,
                magazines: false,
                faqs: false,
            })
        }
        else if (value === 'awards') {
            setState({
                home: false,
                about: false,
                category: false,
                essay: false,
                awards: true,
                gallery: false,
                magazines: false,
                faqs: false,
            })
        }
        else if (value === 'gallery') {
            setState({
                home: false,
                about: false,
                category: false,
                essay: false,
                awards: false,
                gallery: true,
                magazines: false,
                faqs: false,
            })
        }
        else if (value === 'magazines') {
            setState({
                home: false,
                about: false,
                category: false,
                essay: false,
                awards: false,
                gallery: false,
                magazines: true,
                faqs: false,
            })
        }
        else if (value === 'guideline') {
            setState({
                home: false,
                about: false,
                category: false,
                essay: false,
                awards: false,
                gallery: false,
                magazines: false,
                guideline: true,
                faqs: false,
            })
        }
        else if (value === 'faqs') {
            setState({
                home: false,
                about: false,
                category: false,
                essay: false,
                awards: false,
                gallery: false,
                magazines: false,
                guideline: false,
                faqs: true,
            })
        }
    }

    return (
        <div>
            <Navigation refHandler={refHandler} />
            <Banner goTo={state.home} />
            <About goTo={state.about} />
            <Category goTo={state.category} />
            <ImportantDates goTo={state.essay} />
            <Awards goTo={state.awards} />
            <Gallery goTo={state.gallery} />
            <Magazine goTo={state.magazines} />
            <Guideline goTo={state.guideline} />
            <FAQs goTo={state.faqs} />
            <RulesRegulation />
            <Footer />
        </div>
    )
}

export default HomePage;
