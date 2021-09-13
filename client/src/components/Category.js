import React, { useRef } from "react";
import Junior from "../assets/images/others/junior.jpeg";
import Senior from "../assets/images/others/senior.jpeg";

const Category = ({ goTo }) => {
  const categoryRef = useRef(null);

  if (goTo) {
    categoryRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }
  return (
    <div ref={categoryRef} className="section category">
      <h2 className="section__title">Category</h2>
      <p className="section__title__border"></p>
      <p className="section__title__details">
        There are two categories
      </p>
      <div className="category__bg">
        <div className="container row category__card">
          <div
            className="card col-xs-12 category__card-item"
            data-aos="fade-up"
          >
            <div className="card-body">
              <h5>Junior category (14 Years Old - )</h5>
              <hr />
              <img className="category__card__img" src={Junior} alt="" />
            </div>
          </div>
          <div
            className="card col-xs-12 category__card-item"
            data-aos="fade-up"
          >
            <div className="card-body">
              <h5>Senior category (14 Years Old + )</h5>
              <hr />
              <img className="category__card__img" src={Senior} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
