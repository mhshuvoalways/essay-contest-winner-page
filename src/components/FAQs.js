import React, { useState } from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';

const FAQs = () => {
    const [state, setState] = useState({ id: '', show: false });

    const collapseNow = (id) => {
        setState({ id: id, show: !state.show });
    }

    return (
        <div className="section">
            <h2 className="section__title">FAQs</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">Identifying Wizards and honoring them the right way
            </p>
            <div className="faqs container" data-aos="fade-up">
                <div className="faqs__items">
                    <button className="top-banner__button top-banner__button--faqs"
                        onClick={() => collapseNow('1')}>
                        <p className="mt-3">Collapse 1</p>
                        <span>{state.id === '1' & state.show ? '-' : '+'}</span>
                    </button>
                    <p className={`faqs__para ${state.id === '1' & state.show ? 'faqs__fadeIn' : 'faqs__fadeOut'}`}>Essay writing is an art, which brings out your writing skill. It is an art, through which you pen down your knowledge and perception about the given topic.  The Essay Writing Competition shall run throughout the year.</p>
                </div>
                <div className="faqs__items">
                    <button className="top-banner__button top-banner__button--faqs"
                        onClick={() => collapseNow('2')}>
                        <p className="mt-3">Collapse 2</p>
                        <span>{state.id === '2' & state.show ? '-' : '+'}</span>
                    </button>
                    <p className={`faqs__para ${state.id === '2' & state.show ? 'faqs__fadeIn' : 'faqs__fadeOut'}`}>Essay writing is an art, which brings out your writing skill. It is an art, through which you pen down your knowledge and perception about the given topic.  The Essay Writing Competition shall run throughout the year.</p>
                </div>
                <div className="faqs__items">
                    <button className="top-banner__button top-banner__button--faqs"
                        onClick={() => collapseNow('3')}>
                        <p className="mt-3">Collapse 3</p>
                        <span>{state.id === '3' & state.show ? '-' : '+'}</span>
                    </button>
                    <p className={`faqs__para ${state.id === '3' & state.show ? 'faqs__fadeIn' : 'faqs__fadeOut'}`}>Essay writing is an art, which brings out your writing skill. It is an art, through which you pen down your knowledge and perception about the given topic.  The Essay Writing Competition shall run throughout the year.</p>
                </div>
            </div>
        </div>
    )
}

export default FAQs;
