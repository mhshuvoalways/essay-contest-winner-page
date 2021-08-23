import React from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';

const FAQs = () => {

    const collapseNow = () => {

    }

    return (
        <div className="section">
            <h2 className="section__title">FAQs</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">Identifying Wizards and honoring them the right way
            </p>
            <div className="faqs container">
                <div>
                    <button className="top-banner__button top-banner__button--faqs"
                        onClick={collapseNow(1)}>
                        <p>Collapse 1</p>
                        <span>+</span>
                    </button>
                    <p className="faqs__para">Essay writing is an art, which brings out your writing skill. It is an art, through which you pen down your knowledge and perception about the given topic.  The Essay Writing Competition shall run throughout the year.</p>
                </div>
            </div>
        </div>
    )
}

export default FAQs;
