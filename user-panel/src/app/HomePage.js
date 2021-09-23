import React, { useState } from "react";
import About from "../components/About";
import Award from "../components/Achivments";
import Prizes from "../components/Prizes";
import Category from "../components/Category";
import FAQs from "../components/FAQs";
import Gallery from "../components/Gallery";
import Guideline from "../components/Guideline";
import ImportantDates from "../components/ImportantDates";
import Magazine from "../components/Magazine";
import Navigation from "../components/Navigation";
import RulesRegulation from "../components/Rules&Regulation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Banner from "../components/TopBanner";

const HomePage = () => {
  const [state, setState] = useState({
    home: false,
    about: false,
    award: false,
    category: false,
    essay: false,
    prize: false,
    gallery: false,
    magazines: false,
    guideline: false,
    faqs: false,
    contact: false,
  });

  const refHandler = (value) => {
    if (value === "home") {
      setState({
        home: true,
        about: false,
        award: false,
        category: false,
        essay: false,
        prize: false,
        gallery: false,
        magazines: false,
        faqs: false,
        contact: false,
      });
    } else if (value === "about") {
      setState({
        home: false,
        about: true,
        award: false,
        category: false,
        essay: false,
        prize: false,
        gallery: false,
        magazines: false,
        faqs: false,
        contact: false,
      });
    } else if (value === "award") {
      setState({
        home: false,
        about: false,
        award: true,
        category: false,
        essay: false,
        prize: false,
        gallery: false,
        magazines: false,
        faqs: false,
        contact: false,
      });
    } else if (value === "category") {
      setState({
        home: false,
        about: false,
        award: false,
        category: true,
        essay: false,
        prize: false,
        gallery: false,
        magazines: false,
        faqs: false,
        contact: false,
      });
    } else if (value === "essay") {
      setState({
        home: false,
        about: false,
        award: false,
        category: false,
        essay: true,
        prize: false,
        gallery: false,
        magazines: false,
        faqs: false,
        contact: false,
      });
    } else if (value === "prize") {
      setState({
        home: false,
        about: false,
        award: false,
        category: false,
        essay: false,
        prize: true,
        gallery: false,
        magazines: false,
        contact: false,
        faqs: false,
      });
    } else if (value === "gallery") {
      setState({
        home: false,
        about: false,
        award: false,
        category: false,
        essay: false,
        prize: false,
        gallery: true,
        magazines: false,
        contact: false,
        faqs: false,
      });
    } else if (value === "magazines") {
      setState({
        home: false,
        about: false,
        award: false,
        category: false,
        essay: false,
        prize: false,
        gallery: false,
        magazines: true,
        contact: false,
        faqs: false,
      });
    } else if (value === "guideline") {
      setState({
        home: false,
        about: false,
        award: false,
        category: false,
        essay: false,
        prize: false,
        gallery: false,
        magazines: false,
        guideline: true,
        contact: false,
        faqs: false,
      });
    } else if (value === "faqs") {
      setState({
        home: false,
        about: false,
        award: false,
        category: false,
        essay: false,
        prize: false,
        gallery: false,
        magazines: false,
        guideline: false,
        contact: false,
        faqs: true,
      });
    } else if (value === "contact") {
      setState({
        home: false,
        about: false,
        award: false,
        category: false,
        essay: false,
        prize: false,
        gallery: false,
        magazines: false,
        guideline: false,
        contact: true,
        faqs: false,
      });
    }
  };

  return (
    <div>
      <Navigation refHandler={refHandler} />
      <Banner goTo={state.home} />
      <About goTo={state.about} />
      <Award goTo={state.award} />
      <Category goTo={state.category} />
      <ImportantDates goTo={state.essay} />
      <Prizes goTo={state.prize} />
      <Gallery goTo={state.gallery} />
      <Magazine goTo={state.magazines} />
      <Guideline goTo={state.guideline} />
      <FAQs goTo={state.faqs} />
      <Contact goTo={state.contact}/>
      <RulesRegulation />
      <Footer />
    </div>
  );
};

export default HomePage;
