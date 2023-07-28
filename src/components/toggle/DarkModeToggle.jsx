// DarkModeToggle.js

import React from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`} onClick={onToggle}>
    <div className="bubble" style={{ left: darkMode ? '32px' : '2px' }} />
  </button>
  );
};

export default DarkModeToggle;
