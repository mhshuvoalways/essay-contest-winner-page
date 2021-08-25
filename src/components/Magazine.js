import React, { useRef } from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';
import M2 from '../assets/images/magazines/m2.jpg';
import M3 from '../assets/images/magazines/m3.jpg';
import M4 from '../assets/images/magazines/m4.jpg';
import M10 from '../assets/images/magazines/m10.jpg';
import M11 from '../assets/images/magazines/m11.jpg';
import M13 from '../assets/images/magazines/m13.jpg';
import Slider from "react-slick";

const Magazines = ({ goTo }) => {
    const magazineRef = useRef(null)

    if (goTo) {
        magazineRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 767,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
            }
        }]
    };

    return (
        <div ref={magazineRef} className="section">
            <h2 className="section__title">Our Magazines</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">Click into magazines to read for free
            </p>
            <div className="magazines">
                <div className="row">
                    <div className="magazines__details container">
                        <Slider {...settings}>
                            <div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={M2} alt="" />
                            </div>
                            <div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={M3} alt="" />
                            </div><div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={M4} alt="" />
                            </div><div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={M10} alt="" />
                            </div>
                            <div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={M11} alt="" />
                            </div>
                            <div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={M13} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Magazines;
