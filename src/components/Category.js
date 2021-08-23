import React from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';

const Category = () => {
  return (
    <div className="section category">
      <h2 className="section__title">Our Category</h2>
      <img className="section__title__img" src={TitleBottom} alt="" />
      <p className="section__title__details">Some words about this category</p>
      <div className="category__bg">
        <div className="container row category__card">
          <div className="card col-6 category__card-item" data-aos="fade-right">
            <img className="card-img-top" src="" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="top-banner__button">Go somewhere</a>
            </div>
          </div>
          <div className="card col-6 category__card-item" data-aos="fade-left">
            <img className="card-img-top" src="" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="top-banner__button">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category;
