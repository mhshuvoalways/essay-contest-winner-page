import React from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';
import Junior from '../assets/images/others/junior.jpg';
import Senior from '../assets/images/others/senior.jpg';

const Category = () => {
  return (
    <div className="section category">
      <h2 className="section__title">Our Category</h2>
      <img className="section__title__img" src={TitleBottom} alt="" />
      <p className="section__title__details">Some words about this category</p>
      <div className="category__bg">
        <div className="container row category__card">
          <div className="card col-xs-12 category__card-item" data-aos="fade-right">
            <div className="card-body">
              <h5>Junior Category</h5>
              <img className="category__card__img" src={Junior} alt="" />
            </div>
          </div>
          <div className="card col-xs-12 category__card-item" data-aos="fade-left">
            <div className="card-body">
              <h5>Senior Category</h5>
              <img className="category__card__img" src={Senior} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category;
