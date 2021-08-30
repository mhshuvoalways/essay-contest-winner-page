import React, { useState, useRef } from "react";
import TitleBottom from "../assets/images/others/title-bottom.png";

const FAQs = ({ goTo }) => {
  const [state, setState] = useState({ id: "", show: false });
  const faqRef = useRef(null);

  if (goTo) {
    faqRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  const collapseNow = (id) => {
    setState({ id: id, show: !state.show });
  };

  return (
    <div ref={faqRef} className="section">
      <h2 className="section__title">FAQs</h2>
      <img className="section__title__img" src={TitleBottom} alt="" />
      <p className="section__title__details">
        Frequently Asked Questions About Essay Contest
      </p>
      <div className="faqs container" data-aos="fade-up">
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("1")}
          >
            <p className="mt-3">
              Who are eligible to participate in the International Essay
              Contest?
            </p>
            <span>{(state.id === "1") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "1") & state.show ? "faqs__fadeIn" : "faqs__fadeOut"
            }`}
          >
            Anyone can participate with any age or any nationality. There are
            two age groups below 14 Years old and above 14 years old.
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("2")}
          >
            <p className="mt-3">
              Why should I participate in International Essay Contest?
            </p>
            <span>{(state.id === "2") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "2") & state.show ? "faqs__fadeIn" : "faqs__fadeOut"
            }`}
          >
            It allows you to judge your writing ability. It gives an opportunity
            to do research on a given topic. It hones your writing skill. You
            can receive a certificate which would help in your extracurricular
            activity or improve your CV. Also, your essay can be published and
            your writing will be read throughout the words. You can come out
            with new ideas for the society.
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("3")}
          >
            <p className="mt-3">How to submit the essay?</p>
            <span>{(state.id === "3") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "3") & state.show ? "faqs__fadeIn" : "faqs__fadeOut"
            }`}
          >
            Just submit your essay through this link
            https://weavermag.com/essay-contest/public/
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("4")}
          >
            <p className="mt-3">Where can I find the topic?</p>
            <span>{(state.id === "4") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "4") & state.show ? "faqs__fadeIn" : "faqs__fadeOut"
            }`}
          >
            The topic is announced through this link.
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("5")}
          >
            <p className="mt-3">Is the age proof mandatory?</p>
            <span>{(state.id === "5") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "5") & state.show ? "faqs__fadeIn" : "faqs__fadeOut"
            }`}
          >
            No. For the participants, who are above 14 years old, there is no
            need to send age proof. If any participant does not attach the age
            proof, we categorize the participants in the above 14 years old
            group.
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("6")}
          >
            <p className="mt-3">Is the age proof mandatory?</p>
            <span>{(state.id === "6") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "6") & state.show ? "faqs__fadeIn" : "faqs__fadeOut"
            }`}
          >
            No. For the participants, who are above 14 years old, there is no
            need to send age proof. If any participant does not attach the age
            proof, we categorize the participants in the above 14 years old
            group.
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("7")}
          >
            <p className="mt-3">I am not Indian. Can I participate?</p>
            <span>{(state.id === "7") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "7") & state.show ? "faqs__fadeIn" : "faqs__fadeOut"
            }`}
          >
            Yes, it is an International contest and participants form all the
            countries are equally eligible.
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("8")}
          >
            <p className="mt-3">
              What is the word count required for the essay?
            </p>
            <span>{(state.id === "8") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "8") & state.show ? "faqs__fadeIn" : "faqs__fadeOut"
            }`}
          >
            The word count should me minimum 750 words and 500 words for senior
            and junior category respectively. There is no maximum word count.
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("9")}
          >
            <p className="mt-3">Is the age proof mandatory?</p>
            <span>{(state.id === "9") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "9") & state.show ? "faqs__fadeIn" : "faqs__fadeOut"
            }`}
          >
            No. For the participants, who are above 14 years old, there is no
            need to send age proof. If any participant does not attach the age
            proof, we categorize the participants in the above 14 years old
            group.
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("10")}
          >
            <p className="mt-3">What type of certificate will I receive?</p>
            <span>{(state.id === "10") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "10") & state.show
                ? "faqs__fadeIn"
                : "faqs__fadeOut"
            }`}
          >
            All the eligible participants will receive e-certificate (no hard
            copy, but the e-certificate is printable and you can print it at
            your nearby printing shop) which can be downloaded instantly after
            the announcement of result through this link . The e-certificate
            will be signed by Higher Authorities and would immensely help in
            strengthening your CV.
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("11")}
          >
            <p className="mt-3">
              What is the deadline for submission of essay?
            </p>
            <span>{(state.id === "11") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "11") & state.show
                ? "faqs__fadeIn"
                : "faqs__fadeOut"
            }`}
          >
            The deadline is up to midnight of 25th of every month.
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("12")}
          >
            <p className="mt-3">When new topic is announced?</p>
            <span>{(state.id === "12") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "12") & state.show
                ? "faqs__fadeIn"
                : "faqs__fadeOut"
            }`}
          >
            The new topic for any month is announced between 25th to 30th of
            previous month.
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("13")}
          >
            <p className="mt-3">In which language can I write?</p>
            <span>{(state.id === "13") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "13") & state.show
                ? "faqs__fadeIn"
                : "faqs__fadeOut"
            }`}
          >
            You can participate in English, Hindi and Bengali
          </p>
        </div>
        <div className="faqs__items">
          <button
            className="top-banner__button top-banner__button--faqs"
            onClick={() => collapseNow("14")}
          >
            <p className="mt-3">Can I submit hand written essay?</p>
            <span>{(state.id === "14") & state.show ? "-" : "+"}</span>
          </button>
          <p
            className={`faqs__para ${
              (state.id === "14") & state.show
                ? "faqs__fadeIn"
                : "faqs__fadeOut"
            }`}
          >
            Yes. Hand written essay is allowed however, it cannot be published.
            hand written essays can not be submitted online. you have to email
            us at essay.monomousumi@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
