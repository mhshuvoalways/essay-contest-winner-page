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
      <h3 className="section__title__details section__title-h">Theme: Book and Author</h3>
      <p className="section__title__details section__title-p">(The essay should describe any one - book, review and author biography)
      </p>
      <div className="important-date__details" data-aos="fade-up">
        <div className="important-date__details__contant">
          <h3>Important Dates</h3>
          <hr />
          <b>
            <p>Last date of Submission: 25th of every month</p>
            <p>Result announcement: First week of every month</p>
            <p>New topic announcement date - 25th to 30th of every month</p>
          </b>
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
