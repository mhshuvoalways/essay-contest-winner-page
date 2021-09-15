import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import axios from "../utils/axios";

const Magazines = ({ goTo }) => {
  const [state, setState] = useState([]);
  const magazineRef = useRef(null);

  if (goTo) {
    magazineRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  useEffect(() => {
    axios
      .get("/magazine/get")
      .then((res) => {
        setState(res.data.result);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

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
              {state.map((photo) => (
                <div
                  className="card award__card"
                  data-aos="fade-up"
                  key={photo._id}
                >
                  <a
                    target="_blank"
                    href={photo.photoLink}
                    rel="noopener noreferrer"
                  >
                    <img className="magazine__img" src={photo.url} alt="" />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazines;
