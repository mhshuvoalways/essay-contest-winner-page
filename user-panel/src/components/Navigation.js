import React, { useState } from "react";
import Logo from "../assets/images/others/logo.png";

const Navigation = ({ refHandler }) => {
  const [state, setState] = useState({ show: false });

  return (
    <nav className="navbar navbar-expand-lg navbar-light our-nav fixed-top">
      <div className="container">
        <p className="navbar-brand" onClick={() => refHandler("home")}>
          <img className="our-nav__img" src={Logo} alt="" />
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setState({ show: !state.show })}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            state.show ? "collapse__show" : "collapse__hide"
          }`}
        >
          <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={() => refHandler("home")}>
              <p
                className="nav-link active nav__item-color"
                aria-current="page"
              >
                Home
              </p>
            </li>
            <li className="nav-item" onClick={() => refHandler("about")}>
              <p
                className="nav-link active nav__item-color"
                aria-current="page"
              >
                About
              </p>
            </li>
            <li className="nav-item" onClick={() => refHandler("award")}>
              <p
                className="nav-link active nav__item-color"
                aria-current="page"
              >
                Awards
              </p>
            </li>
            <li className="nav-item" onClick={() => refHandler("category")}>
              <p
                className="nav-link active nav__item-color"
                aria-current="page"
              >
                Category
              </p>
            </li>
            <li className="nav-item" onClick={() => refHandler("essay")}>
              <p
                className="nav-link active nav__item-color"
                aria-current="page"
              >
                Eassy
              </p>
            </li>
            <li className="nav-item" onClick={() => refHandler("prize")}>
              <p
                className="nav-link active nav__item-color"
                aria-current="page"
              >
                Prizes
              </p>
            </li>
            <li className="nav-item" onClick={() => refHandler("gallery")}>
              <p
                className="nav-link active nav__item-color"
                aria-current="page"
              >
                Gallery
              </p>
            </li>
            <li className="nav-item" onClick={() => refHandler("magazines")}>
              <p
                className="nav-link active nav__item-color"
                aria-current="page"
              >
                Magazines
              </p>
            </li>
            <li className="nav-item" onClick={() => refHandler("contact")}>
              <p
                className="nav-link active nav__item-color"
                aria-current="page"
              >
                Subscribe
              </p>
            </li>
            <li className="nav-item" onClick={() => refHandler("guideline")}>
              <p
                className="nav-link active nav__item-color"
                aria-current="page"
              >
                Guideline
              </p>
            </li>
            <li className="nav-item" onClick={() => refHandler("faqs")}>
              <p
                className="nav-link active nav__item-color"
                aria-current="page"
              >
                FAQs
              </p>
            </li>
            {/* <li className="nav-item">
              <p
                className="nav-link active nav__item-color"
                aria-current="page"
              >
                <a
                  href="https://essaycontest.monomousumi.com/blog"
                  className="nav-item__blog-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>BLOG </span>
                </a>
              </p>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
