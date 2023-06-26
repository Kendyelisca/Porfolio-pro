import './complement.css';
import React from 'react';
import { BiCheck } from 'react-icons/bi';

const Complement = () => {
  return (
    <>
      <section id="service" className="bg-gray-900 text-white">
        <h2 className="text-center text-3xl pt-10">Skillset</h2>

        <div className="container services__container text-white">
          <article className="service text-white">
            <div className="digit">
              <h2 className="text-red-300">01</h2>
            </div>
            <div className="pb-4 pl-2">
              <h3>UI/UX Design</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Branding Brief</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Post's templates</p>
              </li>
            </ul>
          </article>
          {/* END OF UI/UX DESIGN */}
          <article className="service">
            <div className="digit">
              <h2 className="text-red-300">02</h2>
            </div>
            <div className="service__head pb-4 pl-2">
              <h3>Web Developement</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Fully responsive websites</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Backend approachable</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> E-Commerce</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Search Engine Optimization</p>
              </li>
            </ul>
          </article>
          {/* END OF WEB DEVELOPEMENT */}
          <article className="service ">
            <div className="digit ">
              <h2 className="text-red-300 ">03</h2>
            </div>
            <div className="service__head pb-4 pl-2">
              <h3>Soft Skills</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Adaptability</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Strong Analytical skills</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Strong Communicator</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Fast Learner</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>coachable</p>
              </li>
            </ul>
          </article>
          {/* END OF CONTENT CREATION */}
        </div>
      </section>
    </>
  );
};

export default Complement;
