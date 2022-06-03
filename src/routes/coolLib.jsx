import React from 'react';
import Slider from 'react-slick';

import "../slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

import NavBar from '../components/NavBar';

function coolLib() {

    var settings = {
    dots: true,
    speed: 500,
    centerMode: true,
  };

    return (
        <div>
        <NavBar />
        <div className="swipper-container">
            <Slider {...settings} className="img-wrapper">
                <div className="swipper-container">
                    <img src="https://picsum.photos/500?random=1" alt="1" />
                </div>
                <div className="swipper-container">
                    <img src="https://picsum.photos/500?random=2" alt="2" />
                </div>
                <div className="swipper-container">
                    <img src="https://picsum.photos/500?random=3" alt="3" />
                </div>
                <div className="swipper-container">
                    <img src="https://picsum.photos/500?random=4" alt="4" />
                </div>
                <div className="swipper-container">
                    <img src="https://picsum.photos/500?random=5" alt="5" />
                </div>
                <div className="swipper-container">
                    <img src="https://picsum.photos/500?random=6" alt="6" />
                </div>
            </Slider>
        </div>
        </div>
    )
};

export default coolLib;
