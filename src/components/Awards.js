import React from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';
import Interschoolaward from '../assets/images/awards/interschoolaward.jpg';
import Nationalaward from '../assets/images/awards/nationalaward.jpg';
import Schoolaward from '../assets/images/awards/schoolaward.jpg';
import Stateaward from '../assets/images/awards/stateaward.jpg';
import Star from '../assets/images/awards/star.png';

const Awards = () => {

    return (
        <div className="section container">
            <h2 className="section__title">Awards</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">Identifying Wizards and honoring them the right way
            </p>
            <div className="row">
                <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-right">
                    <img className="card-img-top" src={Stateaward} alt="" />
                    <div className="card-body award__card-body ">
                        <div className="award__card-body__star">
                            <img src={Star} alt="star" className="award__card-body__star__img" />
                            <span>1</span>
                        </div>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
                    <img className="card-img-top" src={Interschoolaward} alt="" />
                    <div className="card-body award__card-body">
                        <div className="award__card-body__star">
                            <img src={Star} alt="star" className="award__card-body__star__img" />
                            <span>2</span>
                        </div>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
                    <img className="card-img-top" src={Nationalaward} alt="" />
                    <div className="card-body award__card-body">
                        <div className="award__card-body__star">
                            <img src={Star} alt="star" className="award__card-body__star__img" />
                            <span>3</span>
                        </div>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card col-md-3 col-sm-6 award__card"
                    data-aos="fade-left">
                    <img className="card-img-top" src={Schoolaward} alt="" />
                    <div className="card-body award__card-body">
                        <div className="award__card-body__star">
                            <img src={Star} alt="star" className="award__card-body__star__img" />
                            <span>4</span>
                        </div>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards;
