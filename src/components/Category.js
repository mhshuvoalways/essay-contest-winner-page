import React, { useRef } from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';
import Junior from '../assets/images/others/junior.jpeg';
import Senior from '../assets/images/others/senior.jpeg';

const Category = ({ goTo }) => {
  const categoryRef = useRef(null)

  if (goTo) {
    categoryRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }
  return (
    <div ref={categoryRef} className="section category">
      <h2 className="section__title">Our Category</h2>
      <img className="section__title__img" src={TitleBottom} alt="" />
      <p className="section__title__details">There are two categories are here</p>
      <div className="category__bg">
        <div className="container row category__card">
          <div className="card col-xs-12 category__card-item" data-aos="fade-up">
            <div className="card-body">
              <h5>Junior Category</h5>
              <hr />
              <img className="category__card__img" src={Junior} alt="" />
            </div>
          </div>
          <div className="card col-xs-12 category__card-item" data-aos="fade-up">
            <div className="card-body">
              <h5>Senior Category</h5>
              <hr />
              <img className="category__card__img" src={Senior} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category;
