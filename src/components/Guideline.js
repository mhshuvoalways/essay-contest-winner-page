import React, { useRef } from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';
import Flowchart from '../assets/images/others/flow-chart.png';

const Guideline = ({ goTo }) => {
    const guideLineRef = useRef(null)

    if (goTo) {
        guideLineRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    return (
        <div ref={guideLineRef} className="section">
            <h2 className="section__title">Our Guideline</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">Identifying Wizards and honoring them the right way
            </p>
            <div className="container" >
                <img data-aos="fade-up" src={Flowchart} alt="" className="guideline__chart" />
            </div>
        </div>
    )
}

export default Guideline;
