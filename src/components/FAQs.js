import React, { useState, useRef } from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';

const FAQs = ({ goTo}) => {
    const [state, setState] = useState({ id: '', show: false });
    const faqRef = useRef(null)

    if (goTo) {
        faqRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    const collapseNow = (id) => {
        setState({ id: id, show: !state.show });
    }

    return (
        <div ref={faqRef} className="section">
            <h2 className="section__title">FAQs</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">Maybe your all answer is here
            </p>
            <div className="faqs container" data-aos="fade-up">
                <div className="faqs__items">
                    <button className="top-banner__button top-banner__button--faqs"
                        onClick={() => collapseNow('1')}>
                        <p className="mt-3">How can I be a part of Weaver?</p>
                        <span>{state.id === '1' & state.show ? '-' : '+'}</span>
                    </button>
                    <p className={`faqs__para ${state.id === '1' & state.show ? 'faqs__fadeIn' : 'faqs__fadeOut'}`}>You can contribute through your writings. You can mail us if you are interested to collaborate in any way with us. We are always open for creative ideas to make the society better. If you wish to collaborate for your business, please contact us through email at monomousumi18@gmail.com</p>
                </div>
                <div className="faqs__items">
                    <button className="top-banner__button top-banner__button--faqs"
                        onClick={() => collapseNow('2')}>
                        <p className="mt-3">Is there any fee for publishing my articles?</p>
                        <span>{state.id === '2' & state.show ? '-' : '+'}</span>
                    </button>
                    <p className={`faqs__para ${state.id === '2' & state.show ? 'faqs__fadeIn' : 'faqs__fadeOut'}`}>No, publishing is free for writers unless the article is not sponsored.</p>
                </div>
                <div className="faqs__items">
                    <button className="top-banner__button top-banner__button--faqs"
                        onClick={() => collapseNow('3')}>
                        <p className="mt-3">Is there any deadline to submit my articles</p>
                        <span>{state.id === '3' & state.show ? '-' : '+'}</span>
                    </button>
                    <p className={`faqs__para ${state.id === '3' & state.show ? 'faqs__fadeIn' : 'faqs__fadeOut'}`}>You are free to write any informative indulging articles, stories, poem, essays, interviews, movie review, script etc. Article should not be plagiarized or copied.</p>
                </div>
                <div className="faqs__items">
                    <button className="top-banner__button top-banner__button--faqs"
                        onClick={() => collapseNow('4')}>
                        <p className="mt-3">What type of articles can I submit?</p>
                        <span>{state.id === '4' & state.show ? '-' : '+'}</span>
                    </button>
                    <p className={`faqs__para ${state.id === '4' & state.show ? 'faqs__fadeIn' : 'faqs__fadeOut'}`}>You can just log in and post your article. If you find any technical problem, you can just mail your articles to us.</p>
                </div>
                <div className="faqs__items">
                    <button className="top-banner__button top-banner__button--faqs"
                        onClick={() => collapseNow('5')}>
                        <p className="mt-3">Will I get paid for my articles?</p>
                        <span>{state.id === '5' & state.show ? '-' : '+'}</span>
                    </button>
                    <p className={`faqs__para ${state.id === '5' & state.show ? 'faqs__fadeIn' : 'faqs__fadeOut'}`}>No. We do not pay for your articles. However, there are a few contests through which you can win fabulous prizes and accolades.</p>
                </div>
            </div>
        </div>
    )
}

export default FAQs;
