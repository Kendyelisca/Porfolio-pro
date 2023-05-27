import React from 'react';
import Slider from 'react-slick';
import './myslider.css';
import { FcSearch } from 'react-icons/fc';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    dots: true,
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
      <h2 className="text-center text-3xl pb-5 font-semibold">My projects</h2>
      <Slider {...settings} className="custom-slider">
        <div className="project">
          <img src={'./mortyApp.webp'} alt="rick y morty" />
          <p>
            <strong>Rick y Morty App</strong>
          </p>
          <p className="p-2 text-sm">
            This is a React App of the caracters found in the series of Rick and Morty.
          </p>
          <a href="https://strong-mooncake-11c81e.netlify.app/" target="_blank">
            <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-700 mt-2">
              Visit project
              <span>
                <FcSearch />
              </span>
            </button>
          </a>
        </div>
        <div className="project ">
          <img src={'./pokemon.jpeg'} alt="rick y morty" />
          <p>
            <strong>My pokemon App</strong>
          </p>
          <p className="p-2  text-sm">
            This is a React App where you can find all the pokemons by name or by type.
          </p>
          <a href="https://mellifluous-rabanadas-277eff.netlify.app/" target="_blank">
            <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-700 mt-2">
              Visit project
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
          <p className="p-2  text-sm">
            This is a weather React App where you can type a country or a city and it'll
            return its actual weather.
          </p>
          <a href="https://relaxed-cranachan-bfb222.netlify.app/" target="_blank">
            <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-700 mt-2">
              Visit project
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
          <p className="p-2  text-sm">
            This is a React App where I demonstrate my skill with creating, reading,
            updating and deleting users.
          </p>
          <a href="https://poetic-palmier-61ea7e.netlify.app/" target="_blank">
            <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-700 ">
              Visit project
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
          <p className="p-2  text-sm">
            This is a React random quote app where with a click you can generate random
            quotes and backgrounds.
          </p>
          <a href="https://delightful-dragon-bc9c02.netlify.app/" target="_blank">
            {' '}
            <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-700">
              Visit project
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
          <p className="p-2  text-sm">
            This is a React e-commerce app where you can add products to your cart to then
            buy or delete when not needed.
          </p>
          <a href="" target="_blank">
            {' '}
            <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-700 ">
              Visit project
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
