import React from 'react';
import './skill.css';

import Slider from 'react-slick';

const Skill = ({darkMode}) => {
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
          <h2 className="text-3xl main-text ">Technologies</h2>
        </div>
        <div className="decent absolute w-[300px] -top-28 -left-28">
          <img src="./shape1.png" alt="svg" />
        </div>
        <Slider {...settings} className="content">
          <div className="frame card ">
            <h3>Library</h3>
            <p>
              ReactJS/<span>NextJS</span>
            </p>
          </div>
          <div className="Lang card">
            <h3>Languages</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>javaScript</p>
          </div>
          <div className="S-C card">
            <h3>Source control</h3>
            <p>Git/Github</p>
            <p>Bitbucket</p>
            <p>Agil</p>
          </div>
          <div className="ui card">
            <h3>UX/UI</h3>
            <p>Wireframing/UML</p>
            <p>Adobe suite</p>
            <p>Elementor expert</p>
          </div>
          <div className="back card">
            <h3>Backend</h3>
            <p>Node js</p>
            <p>MySQL/PostgreSQL</p>
            <p>MongoDB</p>
            <p></p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Skill;
