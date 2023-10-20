import React from 'react';
import Slider from 'react-slick';
import './myslider.css';
import { AiFillEye } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
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
  const { t } = useTranslation();

  return (
    <div id="projects" className="m-10 ">
      <h2 className="text-center text-4xl pb-5 font-bold">{t('Projects')}</h2>
      <Slider {...settings} className="custom-slider">
        <div className="project">
          <img src={'./CartToDoor-logo.png'} alt="rick y morty" />
          <p>
            <strong>CartToDOORMARKET APP</strong>
          </p>
          <div class="overlay">
            <a
              class="icon"
              href="https://carttodoormarket-com.vercel.app/"
              target="_blank"
            >
              <AiFillEye />
            </a>
            <a
              class="icon"
              href="https://github.com/Kendyelisca/carttodoor_app"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="project">
          <img src={'./mortyApp.webp'} alt="rick y morty" />
          <p>
            <strong>Rick y Morty App</strong>
          </p>
          <div class="overlay">
            <a
              class="icon"
              href="https://strong-mooncake-11c81e.netlify.app/"
              target="_blank"
            >
              <AiFillEye />
            </a>
            <a
              class="icon"
              href="https://github.com/Kendyelisca/Rick-y-Morty"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="project">
          <img src={'./weather.webp'} alt="rick y morty" />
          <p>
            <strong>Weather App</strong>
          </p>
          <div class="overlay">
            <a
              class="icon"
              href="https://relaxed-cranachan-bfb222.netlify.app/"
              target="_blank"
            >
              <AiFillEye />
            </a>
            <a class="icon" href="https://github.com/Kendyelisca/clima" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="project">
          <img src={'./userAdmin.avif'} alt="rick y morty" />
          <p>
            <strong>CRUD App</strong>
          </p>
          <div class="overlay">
            <a
              class="icon"
              href="https://poetic-palmier-61ea7e.netlify.app/"
              target="_blank"
            >
              <AiFillEye />
            </a>
            <a class="icon" href="https://github.com/Kendyelisca/my-crud" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="project">
          <img src={'./random.png'} alt="rick y morty" />
          <p>
            <strong>Random Quote App</strong>
          </p>
          <div class="overlay">
            <a
              class="icon"
              href="https://delightful-dragon-bc9c02.netlify.app/"
              target="_blank"
            >
              <AiFillEye />
            </a>
            <a
              class="icon"
              href="https://github.com/Kendyelisca/Quote-Generator"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="project">
          <img src={'./ecommerce.jpg'} alt="rick y morty" />
          <p>
            <strong>E-commerce App</strong>
          </p>
          <div class="overlay">
            <a class="icon" href="https://kendy-comm.vercel.app/" target="_blank">
              <AiFillEye />
            </a>
            <a
              class="icon"
              href="https://github.com/Kendyelisca/kendy-comm"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
