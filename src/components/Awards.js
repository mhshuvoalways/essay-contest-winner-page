import React, { useRef } from "react";
import FirstPrize from "../assets/images/awards/award1.jpeg";
import SecondPrize from "../assets/images/awards/award2.jpeg";
import ThirdPrize from "../assets/images/awards/award3.jpeg";
import FourthPrize from "../assets/images/awards/award4.jpeg";
import Star from "../assets/images/awards/star.png";
import TitleBottom from "../assets/images/others/title-bottom.png";

const Awards = ({ goTo }) => {
  const awardRef = useRef(null);

  if (goTo) {
    awardRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }
  return (
    <div ref={awardRef} className="section container">
      <h2 className="section__title">Awards</h2>
      <img className="section__title__img" src={TitleBottom} alt="" />
      <p className="section__title__details">There are four award are here</p>
      <div className="row">
        <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
          <img className="award__card-img" src={FirstPrize} alt="" />
          <div className="card-body award__card-body">
            <div className="award__card-body__star">
              <img
                src={Star}
                alt="star"
                className="award__card-body__star__img"
              />
              <span>1</span>
            </div>
            <h5 className="card-title">First Award</h5>
          </div>
        </div>
        <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
          <img className="award__card-img" src={SecondPrize} alt="" />
          <div className="card-body award__card-body ">
            <div className="award__card-body__star">
              <img
                src={Star}
                alt="star"
                className="award__card-body__star__img"
              />
              <span>2</span>
            </div>
            <h5 className="card-title">Second Award</h5>
          </div>
        </div>
        <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
          <img className="award__card-img" src={ThirdPrize} alt="" />
          <div className="card-body award__card-body">
            <div className="award__card-body__star">
              <img
                src={Star}
                alt="star"
                className="award__card-body__star__img"
              />
              <span>3</span>
            </div>
            <h5 className="card-title">Third Award</h5>
          </div>
        </div>
        <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
          <img className="award__card-img" src={FourthPrize} alt="" />
          <div className="card-body award__card-body">
            <div className="award__card-body__star">
              <img
                src={Star}
                alt="star"
                className="award__card-body__star__img"
              />
              <span>3</span>
            </div>
            <h5 className="card-title">Third Award</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
