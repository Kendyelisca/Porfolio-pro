import React from 'react';
import './skill.css';
import { useTranslation } from 'react-i18next';

const Skill = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`${
          darkMode
            ? 'skill-container relative overflow-hidden text-white bg-gray-800'
            : 'skill-container relative overflow-hidden bg-zinc-200 text-black'
        }`}
        id="skillset"
      >
        <div className="text-left pl-14 pr-6 pt-1 pb-6 z-10">
          <h2 className="text-4xl font-bold main-text ">{t('tech')}</h2>
        </div>
        <div className="decent absolute w-[300px] -top-28 -left-28">
          <img src="./shape1.png" alt="svg" />
        </div>

        <div className="content">
          <div className="frame card ">
            <img src="./react.png" alt="react logo" />
            <h3>ReactJS</h3>
          </div>
          <div className="card spec">
            <img src="./reactrouterdom.png" alt="react router logo" />
            <h3>React Router Dom</h3>
          </div>
          <div className="card">
            <img src="./reacthookform.png" alt="react hook logo" />
            <h3>React Hook Form</h3>
          </div>
          <div className="card">
            <img src="./redux.png" alt="redux logo" />
            <h3>Redux</h3>
          </div>
          <div className="card">
            <img src="./axios.png" alt="axios logo" />
            <h3>Axios</h3>
          </div>
          <div className="card">
            <img src="./react-native.avif" alt="react native logo" />
            <h3>React Native</h3>
          </div>
          <div className="Lang card">
            <img src="./html.png" alt="html logo" />
            <h3>HTML</h3>
          </div>
          <div className="S-C card">
            <img src="./css.png" alt="css logo" />
            <h3>CSS</h3>
          </div>
          <div className="card spec">
            <img src="./tailwind.webp" alt="tailwind logo" />
            <h3>TailwindCSS</h3>
          </div>
          <div className="ui card">
            <img src="./javascript.png" alt="javascript logo" />
            <h3>JavaScript</h3>
          </div>
          <div className="ui card">
            <img src="./python.jpeg" alt="python logo" />
            <h3>Python</h3>
          </div>
          <div className="ui card">
            <img src="./flask.png" alt="flask logo" />
            <h3>Flask</h3>
          </div>
          <div className="back card">
            <img src="./node.png" alt="nodejs logo" />
            <h3>NodeJS</h3>
          </div>
          <div className="card">
            <img src="./postgresql.png" alt="postgresql logo" />
            <h3>PostgreSQL</h3>
          </div>
          <div className="card">
            <img src="./express.png" alt="express logo" />
            <h3>Express</h3>
          </div>
          <div className="card">
            <img src="./sequelize.png" alt="sequelize logo" />
            <h3>Sequelize</h3>
          </div>
          <div className="card">
            <img src="./git.png" alt="git logo" />
            <h3>Git</h3>
          </div>
          <div className="card">
            <img src="./github.png" alt="github logo" />
            <h3>Github</h3>
          </div>
          <div className="card">
            <img src="./vue.png" alt="vuejs logo" />
            <h3>VueJS</h3>
          </div>
          <div className="card">
            <img src="./angular.png" alt="angularjs logo" />
            <h3>AngularJS</h3>
          </div>
          <div className="card">
            <img src="./mongo.png" alt="mongodb logo" />
            <h3>MongoDB</h3>
          </div>
          <div className="card">
            <img src="./jest.png" alt="jest logo" />
            <h3>Jest</h3>
          </div>
          <div className="card">
            <img src="./typescript.svg" alt="typescript logo" />
            <h3>TypeScript</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
