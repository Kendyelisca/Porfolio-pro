import React, { useEffect } from 'react';
import './footer.css';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900" id="particles-js">
      <a href="#" className="footer__logo">
        Thanks for visiting
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skillset">Skillset</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
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

      <div className="footer__copyright">
        <small>&copy;Kendy Elisca. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
