import React, { useRef } from "react";
import Download from "../assets/images/others/download.png";
import MediaKit from "../assets/download/MediaKit.pdf";
import { saveAs } from "file-saver";

const TopBanner = ({ goTo }) => {
  const home = useRef(null);

  if (goTo) {
    home.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  return (
    <div ref={home} className="top-banner">
      <div className="top-banner__overlay">
        <h2 className="top-banner__title" data-aos="fade-up">
          Monthly International Essay Contest
        </h2>
        <a
          href="https://weavermag.com/essay-contest/public/result"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          className="top-banner__button rainbow rainbow-1 top-banner__button-result"
        >
          Check Result
        </a>
        <button
          data-aos="fade-up"
          onClick={() => {
            saveAs(MediaKit, "Media Kit.pdf");
          }}
          className="top-banner__button rainbow rainbow-1"
        >
          <img src={Download} alt="" />
          Media Kit
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
