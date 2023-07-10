import React from 'react';
import './project.css';
const Project = () => {
  return (
    <div id="portfolio" className="text-center">
      <h3 className="font-bold text-3xl">My project</h3>
      <div className="project-container m-4">
        <div className="project">
          <img src={'./mortyApp.webp'} alt="rick y morty" />
          <p>
            <strong>Rick y Morty App</strong>
          </p>
          <p>This app is created using react and</p>
        </div>
        <div className="project">
          <img src={'./pokemon.jpeg'} alt="rick y morty" />
          <p>
            <strong>My pokemon App</strong>
          </p>
          <p>This app is created using react and</p>
        </div>
        <div className="project">
          <img src={'./weather.webp'} alt="rick y morty" />
          <p>
            <strong>Weather App</strong>
          </p>
          <p>This app is created using react and</p>
        </div>
        <div className="project">
          <img src={'./userAdmin.avif'} alt="rick y morty" />
          <p>
            <strong>User Admin App</strong>
          </p>
          <p>This app is created using react and</p>
        </div>
        <div className="project">
          <img src={'./random.png'} alt="rick y morty" />
          <p>
            <strong>Random Quote App</strong>
          </p>
          <p>This app is created using react and</p>
        </div>
        <div className="project">
          <img src={'./ecommerce.jpg'} alt="rick y morty" />
          <p>
            <strong>E-commerce App</strong>
          </p>
          <p>This app is created using react and</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
