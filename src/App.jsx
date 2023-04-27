import React from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import MySlider from './components/mySlider/MySlider';
import Complement from './components/complement/Complement';
const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Complement />
      <About />
      <Skill />
      <MySlider />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
