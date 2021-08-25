import React, { useRef } from 'react';
import Download from '../assets/images/others/download.png'
import TBI from '../assets/download/download.pdf'
import { saveAs } from 'file-saver';

const TopBanner = ({ goTo }) => {
    const home = useRef(null)

    if (goTo) {
        home.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    return (
        <div ref={home} className="top-banner">
            <div className="top-banner__overlay">
                <h2 className="top-banner__title" data-aos="fade-up">Monthly International Essay Contest</h2>
                <button data-aos="fade-up" className="top-banner__button rainbow rainbow-1">Check Result</button>
                <button data-aos="fade-up"
                    onClick={() => {
                        saveAs(TBI, "TBI-2020-21-BROCHURE-V3.0.pdf");
                    }}
                    className="top-banner__button rainbow rainbow-1">
                    <img src={Download} alt="" />DOWNLOAD BROCHURE
                </button>
            </div>
        </div>
    )
}

export default TopBanner;
