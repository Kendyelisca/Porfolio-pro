import React, { useState } from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import MySlider from './components/mySlider/MySlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleColorMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Nav />
      <button onClick={toggleColorMode} className='bg-red-400 font-bold rounded p-2 '>

        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="ml-1" />
      </button>
      <Header darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skill darkMode={darkMode}/>
      <MySlider darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
};

export default App;
