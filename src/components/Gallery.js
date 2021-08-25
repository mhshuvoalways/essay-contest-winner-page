import React, { useRef } from 'react';
import Img1 from '../assets/images/gallery/1b.jpg';
import Img9 from '../assets/images/gallery/2b.jpg';
import Img2 from '../assets/images/gallery/3b.jpg';
import Img3 from '../assets/images/gallery/4b.jpg';
import Img4 from '../assets/images/gallery/5b.jpg';
import Img5 from '../assets/images/gallery/6b.jpg';
import Img6 from '../assets/images/gallery/7b.jpg';
import Img7 from '../assets/images/gallery/8b.jpg';
import Img8 from '../assets/images/gallery/9b.jpg';
import TitleBottom from '../assets/images/others/title-bottom.png';
import Slider from "react-slick";

const Gallery = ({ goTo }) => {
    const galleryRef = useRef(null)

    if (goTo) {
        galleryRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
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
        <div ref={galleryRef} className="section">
            <h2 className="section__title">Photo Gallery</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">Past winner advertisement
            </p>
            <div className="gallery">
                <div className="row">
                    <div className="magazines__details container">
                        <Slider {...settings}>
                            <div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={Img1} alt="" />
                            </div>
                            <div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={Img9} alt="" />
                            </div><div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={Img3} alt="" />
                            </div><div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={Img2} alt="" />
                            </div>
                            <div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={Img4} alt="" />
                            </div>
                            <div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={Img5} alt="" />
                            </div>
                            <div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={Img6} alt="" />
                            </div>
                            <div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={Img7} alt="" />
                            </div>
                            <div className="card award__card" data-aos="fade-up">
                                <img className="magazine__img" src={Img8} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
