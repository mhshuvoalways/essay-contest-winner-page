import React from 'react';
import Download from '../assets/images/others/download.png'
import TBI from '../assets/download/download.pdf'
import { saveAs } from 'file-saver';

const TopBanner = () => {
    return (
        <div className="top-banner">
            <div className="top-banner__overlay">
                <h2 className="top-banner__title" data-aos="fade-up">NATIONAL MEGA FINAL 2020-2021 RESULT PUBLISHED</h2>
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
