import React from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';
import M2 from '../assets/images/magazines/m2.jpg';
import M3 from '../assets/images/magazines/m3.jpg';
import M4 from '../assets/images/magazines/m4.jpg';
import M10 from '../assets/images/magazines/m10.jpg';
import M11 from '../assets/images/magazines/m11.jpg';
import M13 from '../assets/images/magazines/m13.jpg';
import Slider from "react-slick";

const Magazines = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };

    return (
        <div className="section">
            <h2 className="section__title">Our Magazines</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">Identifying Wizards and honoring them the right way
            </p>
            <div className="magazines">
                <div className="row">
                    <div className="magazines__details container">
                        <Slider {...settings}>
                            <div className="card award__card" data-aos="fade-right">
                                <img className="magazine__img" src={M2} alt="" />
                            </div>
                            <div className="card award__card" data-aos="fade-right">
                                <img className="magazine__img" src={M3} alt="" />
                            </div><div className="card award__card" data-aos="fade-right">
                                <img className="magazine__img" src={M4} alt="" />
                            </div><div className="card award__card" data-aos="fade-right">
                                <img className="magazine__img" src={M10} alt="" />
                            </div>
                            <div className="card award__card" data-aos="fade-right">
                                <img className="magazine__img" src={M11} alt="" />
                            </div>
                            <div className="card award__card" data-aos="fade-right">
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
