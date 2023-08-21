import React from 'react';
import './skill.css';
import { useTranslation } from 'react-i18next';


const Skill = ({darkMode}) => {
const {t} = useTranslation();


  return (
    <>
      <div
        className={`${darkMode ? "skill-container relative overflow-hidden text-white bg-gray-800" : "skill-container relative overflow-hidden bg-gray-200 text-black bg-white"}`}
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
            <img src='./react.png'/>
            <h3>ReactJS</h3>
          </div>
          <div className="card spec">
          <img src='./reactrouterdom.png'/>
            <h3>React Router Dom</h3>
          </div>
          <div className="card">
          <img src='./reacthookform.png'/>
            <h3>React Hook Form</h3>
          </div>
          <div className="card">
          <img src='./redux.png'/>
            <h3>Redux</h3>
          </div>
          <div className="card">
          <img src='./axios.png'/>
            <h3>Axios</h3>
          </div>
          <div className="card">
          <img src='./react-native.avif'/>
            <h3>React Native</h3>
          </div>
          <div className="Lang card">
          <img src='./html.png'/>
            <h3>HTML</h3>
          </div>
          <div className="S-C card">
          <img src='./css.png'/>
            <h3>CSS</h3>
          </div>
          <div className="card spec">
          <img src='./tailwind.webp'/>
            <h3>TailwindCSS</h3>
          </div>
          <div className="ui card">
          <img src='./javascript.png'/>
            <h3>JavaScript</h3>
          </div>
          <div className="back card">
          <img src='./node.png'/>
            <h3>NodeJS</h3>
          </div>
          <div className="card">
          <img src='./postgresql.png'/>
            <h3>PostgreSQL</h3>
          </div>
          <div className="card">
          <img src='./express.png'/>
            <h3>Express</h3>
          </div>
          <div className="card">
          <img src='./sequelize.png'/>
            <h3>Sequelize</h3>
          </div>
          <div className="card">
          <img src='./git.png'/>
            <h3>Git</h3>
          </div>
          <div className="card">
          <img src='./github.png'/>
            <h3>Github</h3>
          </div>
          <div className="card">
          <img src='./vue.png'/>
            <h3>VueJS</h3>
          </div>
          <div className="card">
          <img src='./angular.png'/>
            <h3>AngularJS</h3>
          </div>
          <div className="card">
          <img src='./mongo.png'/>
          <h3>MongoDB</h3>
          </div>
          <div className="card">
          <img src='./jest.png'/>
          <h3>Jest</h3>
          </div>
          <div className="card">
          <img src='./typescript.svg'/>
            <h3>TypeScript</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
