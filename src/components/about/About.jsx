import React from 'react';
import './about.css';

const About = () => {
  return (
    <>
      <div className="idea-container" id="about">
        <div className="value">
          <h2 className="font-bold text-3xl">Philosophy and values</h2>
          <p className="desc pt-10">
            I think everyone wants the same thing - peace of mind, good relationship with
            humanity, and a trusting career. For my part, I do everything based on what I
            value and I extract my creativity from it.
          </p>
          <p className="bord p-1 pt-5">
            <a href="https://www.linkedin.com/in/kendy-elisca-829339205/" target="_blank">
              check my LinkedIn
            </a>
          </p>
        </div>
        <div className="side flex flex-row-reverse">
          <img src={'./image-one.jpeg'} alt="" />
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};

export default About;
