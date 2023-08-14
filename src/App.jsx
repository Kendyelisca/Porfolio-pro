import React, { useState } from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import MySlider from './components/mySlider/MySlider';
import DarkModeToggle from './components/toggle/DarkModeToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './components/form/ContactForm';
import Slide from 'react-reveal/Slide';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleColorMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white relative' : 'bg-white text-black relative'}`}>
      <Nav />
      
    <DarkModeToggle darkMode={darkMode} onToggle={toggleColorMode} />
    <Slide left><Header darkMode={darkMode}/></Slide>
    <Slide right><About darkMode={darkMode}/></Slide> 
      <Slide left><Skill darkMode={darkMode}/></Slide>
      <Slide right><MySlider darkMode={darkMode}/></Slide>
      <Slide left><Contact darkMode={darkMode}/></Slide>
      <Slide right><Footer darkMode={darkMode}/></Slide>
    </div>
  );
};

export default App;
