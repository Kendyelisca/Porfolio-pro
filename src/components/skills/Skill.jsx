import React from 'react';
import './skill.css';

import Slider from 'react-slick';

const Skill = () => {
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
      <div className="skill-container text-white bg-slate-800" id="skillset">
        <div className="text-left pl-14 pr-6 pt-4 pb-6">
          <h2 className="text-3xl main-text">Skillset</h2>
        </div>
        <Slider {...settings} className="content">
          <div className="frame card ">
            <h3 className="text-blue-400">Frameworks</h3>
            <p>ReactJS</p>
            <p>NextJS</p>
            <p>Wordpress</p>
            <p>jquery</p>
          </div>
          <div className="Lang card">
            <h3 className="text-blue-400">Languages</h3>
            <p>HTML</p>
            <p>CSS/SASS</p>
            <p>javaScript</p>
          </div>
          <div className="S-C card">
            <h3 className="text-blue-400">Source control</h3>
            <p>Git/Github</p>
            <p>Bitbucket</p>
            <p>SCRUM/</p>
            <p>Agil</p>
          </div>
          <div className="ui card">
            <h3 className="text-blue-400">UX/UI</h3>
            <p>Wireframing/UML</p>
            <p>Adobe suite</p>
            <p>Elementor expert</p>
          </div>
          <div className="back card">
            <h3 className="text-blue-400">Backend</h3>
            <p>Node js</p>
            <p>Python</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Skill;
