import React, { useState } from 'react';
import './nav.css';
import { BiHome } from 'react-icons/bi';
import { SiAboutdotme } from 'react-icons/si';
import { GrProjects } from 'react-icons/all';
import { FaBook } from 'react-icons/fa';
import { RiContactsLine } from 'react-icons/ri';
import { BsFillHeartPulseFill } from 'react-icons/bs';
const Nav = () => {
  const [navActive, setNavActive] = useState('#');

  return (
    <nav className="z-20">
      <a
        href="#"
        onClick={() => setNavActive('#')}
        className={navActive === '#' ? 'active' : ''}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setNavActive('#about')}
        className={navActive === '#about' ? 'active' : ''}
      >
        <SiAboutdotme />
      </a>
      <a
        href="#experience"
        onClick={() => setNavActive('#experience')}
        className={navActive === '#experience' ? 'active' : ''}
      >
        <FaBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setNavActive('#portfolio')}
        className={navActive === '#portfolio' ? 'active' : ''}
      >
        <BsFillHeartPulseFill />
      </a>
      <a
        href="#contact"
        onClick={() => setNavActive('#contact')}
        className={navActive === '#contact' ? 'active' : ''}
      >
        <RiContactsLine />
      </a>
    </nav>
  );
};

export default Nav;
