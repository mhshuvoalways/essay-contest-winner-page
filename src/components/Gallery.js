import React from 'react';
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

const Gallery = () => {
    return (
        <div className="section container">
            <h2 className="section__title">Photo Gallery</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">10th NATIONAL MEGA FINAL AT KUMARAGURU CAMPUS, COIMBATORE ON 28th & 29th DEC. 2019
            </p>
            <div className="row gallery__all-pic">
                <div className="col-md-4 col-sm-12" data-aos="fade-up">
                    <img src={Img9} alt="" className="gallery__pic" />
                </div>
                <div className="col-md-4 col-sm-12" data-aos="fade-up">
                    <img src={Img1} alt="" className="gallery__pic" />
                </div>
                <div className="col-md-4 col-sm-12" data-aos="fade-up">
                    <img src={Img2} alt="" className="gallery__pic" />
                </div>
                <div className="col-md-4 col-sm-12" data-aos="fade-up">
                    <img src={Img3} alt="" className="gallery__pic" />
                </div>
                <div className="col-md-4 col-sm-12" data-aos="fade-up">
                    <img src={Img4} alt="" className="gallery__pic" />
                </div>
                <div className="col-md-4 col-sm-12" data-aos="fade-up">
                    <img src={Img5} alt="" className="gallery__pic" />
                </div>
                <div className="col-md-4 col-sm-12" data-aos="fade-up">
                    <img src={Img6} alt="" className="gallery__pic" />
                </div>
                <div className="col-md-4 col-sm-12" data-aos="fade-up">
                    <img src={Img7} alt="" className="gallery__pic" />
                </div>
                <div className="col-md-4 col-sm-12" data-aos="fade-up">
                    <img src={Img8} alt="" className="gallery__pic" />
                </div>

            </div>
        </div>
    )
}

export default Gallery;
