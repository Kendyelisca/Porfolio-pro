import React from 'react';
import Slider from 'react-slick';
import './myslider.css';
import { FcSearch } from 'react-icons/fc';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import {t} from "i18next"
function Arrow(props) {
 
  const { className, style, onClick } = props;
  
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

const MySlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const {t} = useTranslation();

  return (
    <div id="projects" className="m-10">
      <h2 className="text-center text-4xl pb-5 font-bold">{t('Projects')}</h2>
      <Slider {...settings} className="custom-slider">
        <div className="project">
        <a href="https://strong-mooncake-11c81e.netlify.app/" target="_blank">
          <img src={'./mortyApp.webp'} alt="rick y morty" />
          <p>
            <strong>Rick y Morty App</strong>
          </p>
         
          </a>
        </div>
        <div className="project ">
        <a href="https://mellifluous-rabanadas-277eff.netlify.app/" target="_blank">
          <img src={'./pokemon.jpeg'} alt="rick y morty" />
          <p>
            <strong>Pokemon App</strong>
          </p>
      
          </a>
        </div>
        <div className="project">
        <a href="https://relaxed-cranachan-bfb222.netlify.app/" target="_blank">
          <img src={'./weather.webp'} alt="rick y morty" />
          <p>
            <strong>Weather App</strong>
          </p>
         
          </a>
        </div>
        <div className="project">
        <a href="https://poetic-palmier-61ea7e.netlify.app/" target="_blank">
          <img src={'./userAdmin.avif'} alt="rick y morty" />
          <p>
            <strong>CRUD App</strong>
          </p>
            
          </a>
        </div>
        <div className="project">
        <a href="https://delightful-dragon-bc9c02.netlify.app/" target="_blank">
          <img src={'./random.png'} alt="rick y morty" />
          <p>
            <strong>Random Quote App</strong>
          </p>
         
           
          </a>
        </div>
        
        <div className="project">
        <a href="https://kendy-comm.vercel.app/" target="_blank">
          <img src={'./ecommerce.jpg'} alt="rick y morty" />
          <p>
            <strong>E-commerce App</strong>
          </p>
         
          </a>
        </div>

        <div className="project">
        <a href="https://todo-app-alpha-seven-99.vercel.app/" target="_blank">
          <img src={'./todo.jpeg'} alt="rick y morty" />
          <p>
            <strong>Angular Task App</strong>
          </p>
         
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
