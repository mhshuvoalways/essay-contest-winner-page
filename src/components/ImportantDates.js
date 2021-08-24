import React from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';

const ImportantDates = () => {
    return (
        <div className="section container">
            <h2 className="section__title">Essay Topic</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">One sportsman who created history</p>

            <div className="important-date__details" data-aos="fade-up">
                <div className="important-date__details__contant">
                    <h3>Important Deadlines</h3>
                    <hr />
                    <p>Last date of Submission: 25thAugust 2021</p>
                    <p>Result announcement: First week of September 2021</p>
                    <p>Result announcement: Through this link</p>
                    <button className="top-banner__button top-banner__button rainbow rainbow-1" data-aos="fade-up">
                        Click For More Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImportantDates;
