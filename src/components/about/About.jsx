import React from 'react';
import './about.css';

const About = () => {
  return (
    <>
      <div className="idea-container" id="about">
        <div className="value p-10">
          <h2 className="font-bold text-3xl">Philosophy and values</h2>
          <p className="desc pt-10 pb-2">
            I think everyone wants the same thing - peace of mind, good relationship with
            humanity, and a trusting career. For my part, I do everything based on what I
            value and I extract my creativity from it.
          </p>
          <p className="bord">
            <a href="https://www.linkedin.com/in/kendy-elisca-829339205/" target="_blank">
              check my Linkdin
            </a>
          </p>
        </div>
        <div className="side flex flex-row-reverse">
          <img src={'./image-three.jpg'} alt="" />
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};

export default About;
