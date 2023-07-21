import React from 'react';
import './skill.css';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

const Skill = ({darkMode}) => {
const {t} = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 978,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className={`${darkMode ? "skill-container relative overflow-hidden text-white bg-gray-800" : "skill-container relative overflow-hidden text-black bg-gray-300"}`}
        id="skillset"
      >
        <div className="text-left pl-14 pr-6 pt-4 pb-6 z-10">
          <h2 className="text-3xl main-text ">{t('tech')}</h2>
        </div>
        <div className="decent absolute w-[300px] -top-28 -left-28">
          <img src="./shape1.png" alt="svg" />
        </div>
        <Slider {...settings} className="content">
          <div className="frame card ">
            <img src='./react.png'/>
            <h3>ReactJS</h3>
          </div>
          <div className="card spec">
          <img src='./reactrouterdom.png'/>
            <h3>React Router Dom</h3>
          </div>
          <div className="card">
          <img src='./reacthookform.png'/>
            <h3>React Hook Form</h3>
          </div>
          <div className="card">
          <img src='./redux.png'/>
            <h3>Redux</h3>
          </div>
          <div className="card">
          <img src='./axios.png'/>
            <h3>Axios</h3>
          </div>
          <div className="Lang card">
          <img src='./html.png'/>
            <h3>HTML</h3>
          </div>
          <div className="S-C card">
          <img src='./css.png'/>
            <h3>CSS</h3>
          </div>
          <div className="ui card">
          <img src='./javascript.png'/>
            <h3>JavaScript</h3>
          </div>
          <div className="back card">
          <img src='./node.png'/>
            <h3>NodeJS</h3>
          </div>
          <div className="card">
          <img src='./postgresql.png'/>
            <h3>PostgreSQL</h3>
          </div>
          <div className="card">
          <img src='./express.png'/>
            <h3>Express</h3>
          </div>
          <div className="card">
          <img src='./sequelize.png'/>
            <h3>Sequelize</h3>
          </div>
          <div className="card">
          <img src='./git.png'/>
            <h3>Git</h3>
          </div>
          <div className="card">
          <img src='./github.png'/>
            <h3>Github</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Skill;
