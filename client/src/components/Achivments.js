import React, { useRef } from "react";
import FirstPrize from "../assets/images/awards/award1.jpeg";
import SecondPrize from "../assets/images/awards/award2.jpeg";
import ThirdPrize from "../assets/images/awards/award3.jpeg";
import FourthPrize from "../assets/images/awards/award4.jpeg";
import Staraward from "../assets/images/awards/staraward.png";

const Awards = ({ goTo }) => {
  const awardRef = useRef(null);

  if (goTo) {
    awardRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }
  return (
    <div ref={awardRef} className="section container">
      <h2 className="section__title">Achievements</h2>
      <p className="section__title__border"></p>
      <p className="section__title__details">
        Recipients of Many National and International Accolades.
      </p>
      <div className="row">
        <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
          <img className="award__card-img" src={FirstPrize} alt="" />
          <div className="card-body award__card-body">
            <div className="award__card-body__star">
              <img
                src={Staraward}
                alt="star"
                className="award__card-body__star__img"
              />
            </div>
          </div>
        </div>
        <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
          <img className="award__card-img" src={SecondPrize} alt="" />
          <div className="card-body award__card-body ">
            <div className="award__card-body__star">
              <img
                src={Staraward}
                alt="star"
                className="award__card-body__star__img"
              />
            </div>
          </div>
        </div>
        <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
          <img className="award__card-img" src={ThirdPrize} alt="" />
          <div className="card-body award__card-body">
            <div className="award__card-body__star">
              <img
                src={Staraward}
                alt="star"
                className="award__card-body__star__img"
              />
            </div>
          </div>
        </div>
        <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
          <img className="award__card-img" src={FourthPrize} alt="" />
          <div className="card-body award__card-body">
            <div className="award__card-body__star">
              <img
                src={Staraward}
                alt="star"
                className="award__card-body__star__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
