import './complement.css';
import React from 'react';
import { BiCheck } from 'react-icons/bi';

const Complement = () => {
  return (
    <>
      <section id="service" className="bg-gray-900 text-white">
        <h5 className="text-center pt-5 text-slate-400">What I Offer</h5>
        <h2 className="text-center text-3xl">Services</h2>

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
          <article className="service">
            <div className="digit">
              <h2 className="text-red-300">03</h2>
            </div>
            <div className="service__head pb-4 pl-2">
              <h3>Content Creation</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p> Product Photography</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p> Social Media Content Creation </p>
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
