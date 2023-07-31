import React from 'react';
import './header.css';
import CV from '../../assets/kendy_cv.pdf';
import { useTranslation } from 'react-i18next';
const Header = ({ darkMode }) => { // Correct the prop name to 'darkMode'
  const { t } = useTranslation();


  return (
    <>
      <div className="header-container" id="#">
        <div className={`${darkMode ? "primo bg-gray-800 relative " : "primo bg-red-100  relative text-gray-900" }`}>
          <h1 className="text-5xl font-bold z-10 relative">
          {t('welcome')}
            <span className=" text-gray-600"> {t('degree')}</span>
          </h1>
          <p className="z-30 relative">
          {t('description')}
          </p>
          <button className="btn z-40 text-center  bg-red-400 w-28 p-2 font-bold rounded-md mt-2 hover:bg-slate-500 hover:scale-95 ">
            <a href={CV} target="_blank" rel="noopener noreferrer">
              {t('ButtonText')}
            </a>
          </button>
        </div>
        <div className={`${darkMode ? "segundo bg-gray-800" : "segundo bg-blue-300 "}`}>
          <div className="image">
            <img src={'./realme.png'} alt="Kendy" className="mage1 z-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
