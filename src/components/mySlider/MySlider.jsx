import React from 'react';

import './myslider.css';
import { AiFillEye } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const MySlider = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="m-10 ">
      <h2 className="text-center text-4xl pb-5 font-bold">{t('Projects')}</h2>
      <div class="projects-container">
        {' '}
        <article class="card-project">
          <div class="card__img">
            <img src="./news-p.png" alt="" />
            <img src="./news-d.png" alt="" />
          </div>
          <div class="card__content--project">
            <h2 className="text-2xl md:text-3xl lg:text-4xl">NewsFlow</h2>
            <p>
              NewsFlow creates a user-friendly platform for accessing news, sharing
              stories, and engaging with a dynamic community. Prioritizing user
              convenience and content personalization, the system integrates the Gnews API
              for a constant influx of fresh and diverse news content.
            </p>
            <span>
              Technologies:Next.js, Tailwind CSS, Node.js, Express.js, JWT, PostgreSQL,
              NodeCron, Nodemailer, Gnews API, Socket.io.
            </span>

            <div class="btn__projects">
              <a href="https://news-flow-two.vercel.app/">
                <AiFillEye />
              </a>
              <a href="https://github.com/Kendyelisca/NewsFlow">
                <FaGithub />
              </a>
            </div>
          </div>
        </article>
        <article class="card-project">
          <div class="card__img">
            <img src="./poke-p.png" alt="" />
            <img src="./poke-d.png" alt="" />
          </div>
          <div class="card__content--project">
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Rick and Morty Wiki</h2>
            <p>
              Explore the vast universe of Rick and Morty with this comprehensive wiki.
              Dive into the multiverse, discover intriguing characters, and unravel the
              mind-bending plots that make this animated series a fan favorite.
            </p>
            <span>Technologies: ReactJs, React Hooks, CSS, Axios</span>

            <div class="btn__projects">
              <a href="https://strong-mooncake-11c81e.netlify.app/">
                <AiFillEye />
              </a>
              <a href="https://github.com/Kendyelisca/Rick-y-Morty">
                <FaGithub />
              </a>
            </div>
          </div>
        </article>
        <article class="card-project">
          <div class="card__img">
            <img src="./quote-p.png" alt="" />
            <img src="./quote-d.png" alt="" />
          </div>
          <div class="card__content--project">
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Quote Generator</h2>
            <p>
              Immerse yourself in a world of wisdom and inspiration with this React-based
              Quote Generator. Experience the joy of discovering thought-provoking and
              motivational quotes at the click of a button. Powered by React, this web
              application seamlessly delivers a daily dose of positivity to uplift and
              inspire users.
            </p>
            <span>Technologies: ReactJs, React Hooks, CSS, Axios</span>
            <div class="btn__projects">
              <a href="https://delightful-dragon-bc9c02.netlify.app/">
                <AiFillEye />
              </a>
              <a href="https://github.com/Kendyelisca/Quote-Generator">
                <FaGithub />
              </a>
            </div>
          </div>
        </article>
        <article class="card-project">
          <div class="card__img">
            <img src="./weather-p.png" alt="" />
            <img src="./weather-d.png" alt="" />
          </div>
          <div class="card__content--project">
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Weather App</h2>
            <p>
              This application gives you the temperature in real time according to the
              location of the browser. As well as the city you enter.
            </p>
            <span>Technologies: ReactJs, React Hooks, CSS, Axios</span>
            <div class="btn__projects">
              <a href="https://relaxed-cranachan-bfb222.netlify.app/">
                <AiFillEye />
              </a>
              <a href="https://github.com/Kendyelisca/clima">
                <FaGithub />
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MySlider;
