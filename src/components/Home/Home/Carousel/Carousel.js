import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carousel1 from '../../../../images/carousel-1.png';
import carousel2 from '../../../../images/carousel-2.png';
import carousel3 from '../../../../images/carousel-3.png';
import carousel4 from '../../../../images/carousel-4.png';
import carousel5 from '../../../../images/carousel-5.png';

import "./Carousel.css";
const carouselImg = [
    {
        id: 1,
        img: carousel1
    },
    {
        id: 2,
        img: carousel2
    },
    {
        id: 3,
        img: carousel3
    },
    {
        id: 4,
        img: carousel4
    },
    {
        id: 5,
        img: carousel5
    },
]
const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

const Carousel = () => {

    return (
        <div className="work-slider d-flex align-items-center justify-content-center">
            <div className="container"> 
            <h1 className="text-center mb-5"> <span style={{color: "white"}}>Here are some of </span><span className="green">our works</span></h1>
                <Slider {...settings}>
                   {
                       carouselImg.map( img => <div className="single-slide"> 
                           <img style={{width: '450px',height: '300px'}} className="img-fluid" src={img.img} alt=""/>
                       </div>)
                   }
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;