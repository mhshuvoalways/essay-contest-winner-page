import React, { useRef } from "react";

const ImportantDates = ({ goTo }) => {
  const importantRef = useRef(null);

  if (goTo) {
    importantRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  return (
    <div ref={importantRef} className="section container">
      <h2 className="section__title">Topic of The Month</h2>
      <p className="section__title__border"></p>
      <h3 className="section__title__details">
        One sportsman who created history
      </h3>
      <div className="important-date__details" data-aos="fade-up">
        <div className="important-date__details__contant">
          <h3>Important Dates</h3>
          <hr />
          <p>Last date of Submission: Last date -25th of Every Month</p>
          <p>Result announcement: First week of every month</p>
          <p>New topic announcement date - 25th to 30th of every month</p>
          <button
            className="top-banner__button top-banner__button rainbow rainbow-1"
            data-aos="fade-up"
          >
            Click For More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;
