import React, { useState } from 'react';
import './nav.css';
import { BiHome } from 'react-icons/bi';
import { HiLightBulb } from 'react-icons/hi';
import { GrProjects } from 'react-icons/all';
import { FaBook } from 'react-icons/fa';
import { RiContactsLine } from 'react-icons/ri';
import { BsFillHeartPulseFill } from 'react-icons/bs';
import { MdOutlineMiscellaneousServices } from 'react-icons/all';
const Nav = () => {
  const [navActive, setNavActive] = useState('#');

  return (
    <nav className="z-50">
      <a
        href="#"
        onClick={() => setNavActive('#')}
        className={navActive === '#' ? 'active' : ''}
      >
        <BiHome />
      </a>
      <a
        href="#service"
        onClick={() => setNavActive('#service')}
        className={navActive === '#service' ? 'active' : ''}
      >
        <MdOutlineMiscellaneousServices />
      </a>
      <a
        href="#about"
        onClick={() => setNavActive('#about')}
        className={navActive === '#about' ? 'active' : ''}
      >
        <HiLightBulb />
      </a>
      <a
        href="#skillset"
        onClick={() => setNavActive('#experience')}
        className={navActive === '#experience' ? 'active' : ''}
      >
        <FaBook />
      </a>
      <a
        href="#projects"
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
