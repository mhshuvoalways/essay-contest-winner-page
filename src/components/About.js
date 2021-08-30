import React, { useRef } from "react";
import TitleBottom from "../assets/images/others/title-bottom.png";

const About = ({ goTo }) => {
  const aboutRef = useRef(null);

  if (goTo) {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  return (
    <div ref={aboutRef} className="section about container">
      <h2 className="section__title">About Contest</h2>
      <img className="section__title__img" src={TitleBottom} alt="" />
      <p className="section__title__details">Some words about the contest</p>
      <div data-aos="fade-up" className="about__details">
        <br />
        <p>
          Mononomosuumi is a non commercial Edutech Platform, that brings
          together technology to the education sector and providing requisite
          support to students, writers and school administrations of rural
          areas. Officially launched in May 2018 by a group of highly educated
          enthusiastic professionals, web designers, writers, reporters,
          engineers, and social workers with intent to make writing related
          extracurricular activities accessible through technology-driven
          solutions.
          <br />
          <br />
          It is a monthly International Essay Contest. With a carefully chosen
          educational topic given once a month, we encourage participants to
          develop not only the skills of penning down their thoughts but also
          creativity, research, and organization skills. We believe in the
          enrichment of society by empowering young individuals with
          constructive thinking for creating positive ambience for the overall
          societal growth.
          <br />
          <br />
          We have never charged any money from our students who participate in
          an essay competition every month. The whole idea of this setup is to
          be a platform where kids from across the country can share their
          opinions on different topics. This gives them a sense of global
          citizenship and where they stand globally in terms of understanding on
          a particular topic.
        </p>
      </div>
      <butoon
        data-aos="fade-up"
        className="top-banner__button top-banner__button--about rainbow rainbow-1"
      >
        Check Result
      </butoon>
    </div>
  );
};

export default About;
