import React from 'react';
import Button from '@material-ui/core/Button';

const TopBanner = () => {
    return (
        <div className="top-banner">
            <div className="top-banner__overlay">
                <h2 className="top-banner__title" data-aos="fade-up">NATIONAL MEGA FINAL 2020-2021 RESULT PUBLISHED</h2>
                <Button variant="contained" color="primary" data-aos="fade-up" className="top-banner__button">Check Result</Button>
            </div>
        </div>
    )
}

export default TopBanner;
