import React, { useRef } from "react";

const RulesRegulation = ({ goTo }) => {
  const rulesRef = useRef(null);

  if (goTo) {
    rulesRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  return (
    <div ref={rulesRef} className="section container">
      <h2 className="section__title">Rules & Regulations</h2>
      <p className="section__title__border"></p>
      <p className="section__title__details">
        Please don't violate any restrictions
      </p>
      <div data-aos="fade-up">
       <ul>
       
       </ul>
      </div>
    </div>
  );
};

export default RulesRegulation;
