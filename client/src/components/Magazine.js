import React, { useRef } from "react";
import M1 from "../assets/images/magazines/m1.jpg";
import M2 from "../assets/images/magazines/m2.jpg";
import M3 from "../assets/images/magazines/m3.jpg";
import M4 from "../assets/images/magazines/m4.jpg";
import M5 from "../assets/images/magazines/m5.jpg";
import M6 from "../assets/images/magazines/m6.jpg";
import M7 from "../assets/images/magazines/m7.jpg";
import M8 from "../assets/images/magazines/m8.jpg";
import M9 from "../assets/images/magazines/m9.jpg";
import M10 from "../assets/images/magazines/m10.jpg";
import M11 from "../assets/images/magazines/m11.jpg";
import M12 from "../assets/images/magazines/m12.jpg";
import M13 from "../assets/images/magazines/m13.jpg";
import Slider from "react-slick";

const Magazines = ({ goTo }) => {
  const magazineRef = useRef(null);

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
    <div ref={magazineRef} className="section">
      <h2 className="section__title">Our Magazines</h2>
      <p className="section__title__border"></p>
      <p className="section__title__details">
        Click into magazines to read for free
      </p>
      <div className="magazines">
        <div className="row">
          <div className="magazines__details container">
            <Slider {...settings}>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-jan2020"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M1} alt="" />
                </a>
              </div>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-feb2020"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M2} alt="" />
                </a>
              </div>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-volume-3"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M3} alt="" />
                </a>
              </div>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-volume-4"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M4} alt="" />
                </a>
              </div>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-volume-5"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M5} alt="" />
                </a>
              </div>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-volume-6"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M6} alt="" />
                </a>
              </div>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-volume-7"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M7} alt="" />
                </a>
              </div>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-volume-8"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M8} alt="" />
                </a>
              </div>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-volume-9"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M9} alt="" />
                </a>
              </div>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-volume-10"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M10} alt="" />
                </a>
              </div>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-volume-11"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M11} alt="" />
                </a>
              </div>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-volume-12"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M12} alt="" />
                </a>
              </div>
              <div className="card award__card" data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://monomousumi.com/weaver-jan2020"
                  rel="noopener noreferrer"
                >
                  <img className="magazine__img" src={M13} alt="" />
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazines;
