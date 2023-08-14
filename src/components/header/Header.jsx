import React, {useState} from 'react';
import './header.css';
import CV from '../../assets/kendy_cv.pdf';
import { useTranslation } from 'react-i18next';
import ContactForm from '../form/ContactForm';
const Header = ({ darkMode }) => { // Correct the prop name to 'darkMode'
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };


  return (
    <>
      <div className="header-container" id="#">
        <div className={`${darkMode ? "primo bg-gray-800 relative " : "primo bg-gray-200  relative text-gray-900" }`}>
          <h1 className="text-5xl font-bold z-10 relative">
          {t('welcome')}
            <span className=" text-gray-600"> {t('degree')}</span>
          </h1>
          <p className="z-30 relative">
          {t('description')}
          </p>
          <div className='flex justify-center items-center gap-8'><button className="btn z-40 text-center  bg-red-400 w-28 p-2 font-bold rounded-md mt-2 hover:bg-slate-500 hover:scale-95 ">
            <a href={CV} target="_blank" rel="noopener noreferrer">
              {t('ButtonText')}
            </a>
          </button>
          <div class="button-borders z-10">
           <button class="primary-button" onClick={handleOpenForm}>{t('ButtonText2')}
           </button>
           </div></div>
          
          {showForm && <ContactForm onClose={handleCloseForm} darkMode={darkMode}/>}
        </div>
        <div className={`${darkMode ? "segundo bg-gray-800" : "segundo bg-gray-200 "}`}>
          <div className="image">
            <img src={'./realme.png'} alt="Kendy" className="mage1 z-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
