import React, { useRef } from 'react';
import FirstPrize from '../assets/images/awards/second-prize.png';
import SecondPrize2 from '../assets/images/awards/first-prize.png';
import FourthPrize from '../assets/images/awards/fourth-prize.mp4';
import Star from '../assets/images/awards/star.png';
import TitleBottom from '../assets/images/others/title-bottom.png';

const Awards = ({ goTo }) => {
    const awardRef = useRef(null)

    if (goTo) {
        awardRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    return (
        <div ref={awardRef} className="section container">
            <h2 className="section__title">Awards</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">There are four awards are here
            </p>
            <div className="row">
                <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
                    <img className="card-img-top" src={FirstPrize} alt="" />
                    <div className="card-body award__card-body">
                        <div className="award__card-body__star">
                            <img src={Star} alt="star" className="award__card-body__star__img" />
                            <span>1</span>
                        </div>
                        <h5 className="card-title">First Prize</h5>
                    </div>
                </div>
                <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
                    <img className="card-img-top" src={SecondPrize2} alt="" />
                    <div className="card-body award__card-body ">
                        <div className="award__card-body__star">
                            <img src={Star} alt="star" className="award__card-body__star__img" />
                            <span>2</span>
                        </div>
                        <h5 className="card-title">Second Prize</h5>
                    </div>
                </div>
                <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
                    <img className="card-img-top" src={SecondPrize2} alt="" />
                    <div className="card-body award__card-body">
                        <div className="award__card-body__star">
                            <img src={Star} alt="star" className="award__card-body__star__img" />
                            <span>3</span>
                        </div>
                        <h5 className="card-title">Third Prize</h5>
                    </div>
                </div>
                <div className="card col-md-3 col-sm-6 award__card" data-aos="fade-up">
                    <video autoPlay muted className="awards__video">
                        <source src={FourthPrize} className="card-img-top" />
                    </video>
                    <div className="card-body award__card-body">
                        <div className="award__card-body__star">
                            <img src={Star} alt="star" className="award__card-body__star__img" />
                            <span>4</span>
                        </div>
                        <h5 className="card-title">Fourth Prize</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards;
