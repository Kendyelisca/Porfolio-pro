import React from 'react';
import './header.css';
import CV from '../../assets/kendy_cv.pdf';

const Header = () => {
  return (
    <>
      <div className="header-container" id="#">
        <div className="primo bg-gray-900 relative">
          <h1 className="text-4xl font-bold z-10 relative">
            Welcome! I'm Kendy Elisca, a passionate
            <span className=" text-gray-500"> Full Stack Web Developer.</span>
          </h1>
          <p className="z-30 relative">
            I have a strong commitment to delivering high-quality solutions and thrive on
            challenging projects. If you're looking for a dynamic developer with an eye
            for detail, you've come to the right place!
          </p>
          <button className="btn z-40 text-center  bg-red-400 w-28 p-2 font-bold rounded-md mt-4 hover:bg-slate-500 hover:scale-95 ">
            <a href={CV} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </button>
        </div>
        <div className="segundo bg-gray-900">
          {' '}
          <div className="design"></div>
          <div className="image">
            <img src={'./kendy.webp'} alt="Kendy" className="mage1 z-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
