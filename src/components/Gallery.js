import React, { useRef } from "react";
import Img1 from "../assets/images/gallery/1.jpeg";
import Img2 from "../assets/images/gallery/2.jpeg";
import Img3 from "../assets/images/gallery/3.jpeg";
import Img4 from "../assets/images/gallery/4.jpeg";
import Img5 from "../assets/images/gallery/5.jpeg";
import Img6 from "../assets/images/gallery/6.jpeg";
import Img7 from "../assets/images/gallery/7.jpeg";
import Img8 from "../assets/images/gallery/8.jpeg";
import Img9 from "../assets/images/gallery/9.jpeg";
import Img10 from "../assets/images/gallery/10.jpeg";
import Img11 from "../assets/images/gallery/11.jpeg";
import Img12 from "../assets/images/gallery/12.jpeg";
import Img13 from "../assets/images/gallery/13.jpeg";
import Img14 from "../assets/images/gallery/14.jpeg";
import Img15 from "../assets/images/gallery/15.jpeg";
import Img16 from "../assets/images/gallery/16.jpeg";
import Img17 from "../assets/images/gallery/17.jpeg";
import Img18 from "../assets/images/gallery/18.jpeg";
import Img19 from "../assets/images/gallery/19.jpeg";
import Img20 from "../assets/images/gallery/20.jpeg";
import Img21 from "../assets/images/gallery/21.jpeg";
import Img22 from "../assets/images/gallery/22.jpeg";
import Img23 from "../assets/images/gallery/23.jpeg";
import Img24 from "../assets/images/gallery/24.jpeg";
import Img25 from "../assets/images/gallery/25.jpeg";
import Img26 from "../assets/images/gallery/26.jpeg";
import Slider from "react-slick";

const Gallery = ({ goTo }) => {
  const galleryRef = useRef(null);

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

    responsive: [
      {
        breakpoint: 767,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div ref={galleryRef} className="section">
      <h2 className="section__title">Photo Gallery</h2>
      <p className="section__title__border"></p>
      <p className="section__title__details">Past winners</p>
      <div className="gallery">
        <div className="row">
          <div className="magazines__details container">
            <Slider {...settings}>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img1} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img2} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img3} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img4} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img5} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img6} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img7} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img8} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img9} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img10} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img11} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img12} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img13} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img14} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img15} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img16} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img17} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img18} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img19} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img20} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img21} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img22} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img23} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img24} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img25} alt="" />
              </div>
              <div className="card award__card" data-aos="fade-up">
                <img className="magazine__img--height" src={Img26} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
