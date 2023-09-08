import React, { useEffect } from 'react';
import './footer.css';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = ({darkMode}) => {
const {t} = useTranslation();

  return (
    <footer className={`${darkMode ? "bg-gray-800 relative overflow-hidden " : "bg-blue-300  relative overflow-hidden "}`} >
      <a href="#" className={`${darkMode ? "footer__logo font-bold" : "footer__logo2 font-bold"}`}>
        {t('Farewell')}
      </a>
      <div className="decent absolute w-[400px]  -right-36 -bottom-40">
        <img src="./shape1.png" alt="svg" />
      </div>
      <ul className={`${darkMode ? "permalinks" : "permalinks2"}`}>
        <li>
          <a href="#">{t('Home')}</a>
        </li>
        <li>
          <a href="#about">{t('About')}</a>
        </li>

        <li>
          <a href="#skillset">{t('Skillset')}</a>
        </li>
        <li>
          <a href="#projects">{t('Projects')}</a>
        </li>
        <li>
          <a href="#contact">{t('Contact')}</a>
        </li>
      </ul> 
      <div className={`${darkMode ? "footer__socials" : "footer__socials2"}`}>
        <a href="https://www.linkedin.com/in/kendy-elisca-829339205/" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Kendyelisca" target="_blank">
          <IoLogoGithub />
        </a>
        <a href="https://www.instagram.com/kendyelisca5/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/EliscaKendy" target="_blank">
          <FaTwitter />
        </a>
      </div>

      <div className={`${darkMode ? "footer__copyright" : "footer__copyright2"}`}>
        <small>&copy;Kendy Elisca. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
