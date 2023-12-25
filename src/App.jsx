import React, { useState } from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import MySlider from './components/mySlider/MySlider';
import DarkModeToggle from './components/toggle/DarkModeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './components/form/ContactForm';
import Game from './components/game/Game';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleColorMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? 'bg-gray-900 text-white relative' : 'bg-zinc-200 text-black relative'
      }`}
    >
      <Nav />

      <DarkModeToggle darkMode={darkMode} onToggle={toggleColorMode} />
      <Header darkMode={darkMode} />
      <Game />
      <About darkMode={darkMode} />
      <Skill darkMode={darkMode} />
      <MySlider darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
