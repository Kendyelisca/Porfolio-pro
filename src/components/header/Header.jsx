import React from 'react';
import './header.css';
import CV from '../../assets/My-one-CV.pdf';
const Header = () => {
  return (
    <>
      <div className="header-container " id="#">
        <div className="primo bg-black">
          <h3 className="p-2 pb-8 pl-3 text-xl font-bold">Kendy.E</h3>
          <div className="image relative">
            <img src={'./back1.png'} alt="Kendy" className="mage1 z-10" />
            <img src={'./miback.png'} alt="svg" className="mage2" />
          </div>
        </div>
        <div className="segundo bg-slate-800 ">
          <h1 className="text-5xl font-bold z-10 relative">
            Hey I am Kendy Elisca. I am a
            <span className="text-slate-400"> frontend developer.</span>
          </h1>
          <p className="z-30 relative">
            I am the perfect guy to reach out to when it comes to web development.If you
            have a great project that needs some amazing skills, I'm your guy.
          </p>
          <button className="z-40 text-left bg-slate-600 w-24 p-2 font-bold rounded-md mt-4 hover:bg-slate-500">
            <a href={CV} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
