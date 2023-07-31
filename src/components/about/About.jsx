import React from 'react';
import './about.css';
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="idea-container" id="about">
        <div className="value">
          <h2 className="font-bold text-4xl"> {t('title')}</h2>
          <p className="desc pt-10">
           {t('detail')}
          </p>
          <p className="bord p-1 pt-5">
            <a href="https://www.linkedin.com/in/kendy-elisca-829339205/" target="_blank">
            {t('linkdin')}
            </a>
          </p>
        </div>
        <div className="side flex flex-row-reverse">
          <img src={'./image-one.jpeg'} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
