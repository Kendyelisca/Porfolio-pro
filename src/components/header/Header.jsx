import React from 'react';
import './header.css';
import CV from '../../assets/kendy_cv.pdf';
const Header = () => {
  return (
    <>
      <div className="header-container " id="#">
        <div className="primo bg-gray-900">
          <h1 className="text-4xl font-bold z-10 relative">
            Hey I am Kendy Elisca. I am a
            <span className="text-gray-700"> Full Stack Web Developer.</span>
          </h1>
          <p className="z-30 relative">
            I am the perfect guy to reach out to when it comes to web development.If you
            have a great project that needs some amazing skills, I'm your guy.
          </p>
          <button className="z-40 text-left  bg-red-400 w-24 p-2 font-bold rounded-md mt-4 hover:bg-slate-500 hover:scale-95 ">
            <a href={CV} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </button>
        </div>
        <div className="segundo bg-red-400 ">
          {' '}
          <div className="image relative">
            <img src={'./back1.png'} alt="Kendy" className="mage1 z-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
