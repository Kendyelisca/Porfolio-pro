// DarkModeToggle.js

import React from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <div className="absolute z-10 right-32"> <button className={`dark-mode-toggle ${darkMode ? 'light' : 'dark'}`} onClick={onToggle}>
    <div className="bubble" style={{ left: darkMode ? '32px' : '2px' }} />
  </button></div>
   
  );
};

export default DarkModeToggle;
