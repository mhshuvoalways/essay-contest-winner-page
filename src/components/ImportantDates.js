import React from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';
import ImportantDatesImg from '../assets/images/others/important-date.jpg';

const ImportantDates = () => {
    return (
        <div className="section container">
            <h2 className="section__title">Important Dates</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">Below is the list of Exam Dates you can choose to attend. Read the rules and regulations on the last page</p>
            <div className="important-date__details" data-aos="fade-up">
                <div >
                    <img src={ImportantDatesImg} alt="" className="important-date__details__img" />
                </div>
                <div className="important-date__details__contant">
                    <h3>Topic of The Month</h3>
                    <p>Essay Topic: One Sportsman Who Created History</p>
                    <button className="top-banner__button top-banner__button rainbow rainbow-1"  data-aos="fade-up">
                        Click For More Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImportantDates;
