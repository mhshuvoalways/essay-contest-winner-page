import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import axios from "../utils/axios";

const Gallery = ({ goTo }) => {
  const [state, setState] = useState([]);
  const galleryRef = useRef(null);

  if (goTo) {
    galleryRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  useEffect(() => {
    axios
      .get("/photoGallery/get")
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
    <div ref={galleryRef} className="section">
      <h2 className="section__title">Photo Gallery</h2>
      <p className="section__title__border"></p>
      <p className="section__title__details">Past winners</p>
      <div className="gallery">
        <div className="row">
          <div className="magazines__details container">
            <Slider {...settings}>
              {state.map((photo) => (
                <div
                  className="card award__card"
                  data-aos="fade-up"
                  key={photo._id}
                >
                  <img
                    className="magazine__img--height"
                    src={photo.url}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
