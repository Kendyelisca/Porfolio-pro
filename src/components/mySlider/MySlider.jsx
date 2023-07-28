import React from 'react';
import Slider from 'react-slick';
import './myslider.css';
import { FcSearch } from 'react-icons/fc';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import {t} from "i18next"
function Arrow(props) {
  const {t} = useTranslation();
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

  return (
    <div id="projects" className="m-10">
      <h2 className="text-center text-3xl pb-5 font-semibold">{t('project')}</h2>
      <Slider {...settings} className="custom-slider">
        <div className="project">
          <img src={'./mortyApp.webp'} alt="rick y morty" />
          <p>
            <strong>Rick y Morty App</strong>
          </p>
          <div className="techno">
            <img src='./react.png'/>
            <img src='./axios.png'/>
            <img src='./reactrouterdom.png'/>
            <img src='./html.png'/>
            <img src='./css.png'/>
            <img src='./tailwind.webp'/>
          </div>
          <a href="https://strong-mooncake-11c81e.netlify.app/" target="_blank">
            <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-700 mt-2">
              {t('ButtonT')}
              <span>
                <FcSearch />
              </span>
            </button>
          </a>
        </div>
        <div className="project ">
          <img src={'./pokemon.jpeg'} alt="rick y morty" />
          <p>
            <strong>Pokemon App</strong>
          </p>
          <div className="techno">
            <img src='./react.png'/>
            <img src='./axios.png'/>
            <img src='./reactrouterdom.png'/>
            <img src='./html.png'/>
            <img src='./css.png'/>
            <img src='./tailwind.webp'/>
          </div>
          <a href="https://mellifluous-rabanadas-277eff.netlify.app/" target="_blank">
            <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-700 mt-2">
            {t('ButtonT')}
              <span className="pl-1">
                <FcSearch />
              </span>
            </button>
          </a>
        </div>
        <div className="project">
          <img src={'./weather.webp'} alt="rick y morty" />
          <p>
            <strong>Weather App</strong>
          </p>
          <div className="techno">
            <img src='./react.png'/>
            <img src='./axios.png'/>
            <img src='./reactrouterdom.png'/>
            <img src='./html.png'/>
            <img src='./css.png'/>
            <img src='./tailwind.webp'/>
          </div>
          <a href="https://relaxed-cranachan-bfb222.netlify.app/" target="_blank">
            <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-700 mt-2">
            {t('ButtonT')}
              <span className="pl-1">
                <FcSearch />
              </span>
            </button>
          </a>
        </div>
        <div className="project">
          <img src={'./userAdmin.avif'} alt="rick y morty" />
          <p>
            <strong>CRUD App</strong>
          </p>
          <div className="techno">
            <img src='./react.png'/>
            <img src='./axios.png'/>
            <img src='./reactrouterdom.png'/>
            <img src='./html.png'/>
            <img src='./css.png'/>
            <img src='./tailwind.webp'/>
          </div>
          <a href="https://poetic-palmier-61ea7e.netlify.app/" target="_blank">
            <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-700 ">
            {t('ButtonT')}
              <span className="pl-1">
                <FcSearch />
              </span>
            </button>
          </a>
        </div>
        <div className="project">
          <img src={'./random.png'} alt="rick y morty" />
          <p>
            <strong>Random Quote App</strong>
          </p>
          <div className="techno">
            <img src='./react.png'/>
            <img src='./axios.png'/>
            <img src='./reactrouterdom.png'/>
            <img src='./html.png'/>
            <img src='./css.png'/>
            <img src='./tailwind.webp'/>
          </div>
          <a href="https://delightful-dragon-bc9c02.netlify.app/" target="_blank">
            {' '}
            <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-700">
            {t('ButtonT')}
              <span className="pl-1">
                <FcSearch />
              </span>
            </button>
          </a>
        </div>
        <div className="project">
          <img src={'./ecommerce.jpg'} alt="rick y morty" />
          <p>
            <strong>E-commerce App</strong>
          </p>
          <div className="techno">
            <img src='./react.png'/>
            <img src='./axios.png'/>
            <img src='./reactrouterdom.png'/>
            <img src='./html.png'/>
            <img src='./css.png'/>
            <img src='./tailwind.webp'/>
          </div>
          <a href="https://kendy-comm.vercel.app/" target="_blank">
            {' '}
            <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-700 ">
            {t('ButtonT')}
              <span className="pl-1">
                <FcSearch />
              </span>
            </button>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
