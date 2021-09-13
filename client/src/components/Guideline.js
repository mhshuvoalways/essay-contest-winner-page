import React, { useRef } from "react";
import Videos from "../assets/images/others/guideLines.mp4";

const Guideline = ({ goTo }) => {
  const guideLineRef = useRef(null);

  if (goTo) {
    guideLineRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  return (
    <div ref={guideLineRef} className="section">
      <h2 className="section__title">Our Guideline</h2>
      <p className="section__title__border"></p>
      <p className="section__title__details">
        Identifying Wizards and honoring them the right way
      </p>
      <div className="container">
        <video autoPlay muted className="guideline__chart__video">
          <source src={Videos} className="card-img-top" />
        </video>
      </div>
    </div>
  );
};

export default Guideline;
