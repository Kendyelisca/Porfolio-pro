import React from 'react';
import './header.css';
const Header = () => {
  return (
    <>
      <div className="header-container " id="#">
        <div className="primo bg-black">
          <h3 className="p-2 pb-8 pl-3 text-xl font-bold">Kendy.E</h3>
          <div className="image">
            <img src={'./image-one.jpeg'} alt="Tools" />
          </div>
        </div>
        <div className="segundo bg-slate-800 flex flex-col justify-center items-center gap-5 p-10">
          <h1 className="text-5xl font-bold z-10">
            Hey I am Kendy Elisca. I am a
            <span className="text-slate-400"> frontend developer</span>
          </h1>
          <p className="z-10">
            I am very passionate. If you have a great project that needs some amazing
            skills, I'm your guy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
