import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
const Contact = ({darkMode}) => {

const {t} = useTranslation();

  return (
    <section id="contact" className="pt-8">
      <h5 className="font-bold text-1xl">{t('Title2')}</h5>
      <div className="container contact__container">
        <div className="contact__options">
          <article className={`${darkMode ? "contact__option bg-gray-800" : "contact__option2 bg-gray-300"}`}>
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kendyelisca5@gmail.com</h5>
            <a
              href="mailto:kendyelisca5@gmail.com"
              target="_blank"
              className={`${darkMode ? "text-white" : "text-black"}`}
            >
              {t('ButtonC')}
            </a>
          </article>
          <article className={`${darkMode ? "contact__option bg-gray-800" : "contact__option2 bg-gray-300"}`}>
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Kendyelisca</h5>
            <a
              href="https://web.facebook.com/messages/t/100057301837801"
              target="_blank"
              className={`${darkMode ? "text-white" : "text-black"}`}
            >
            {t('ButtonC')}
            </a>
          </article>
          <article className={`${darkMode ? "contact__option bg-gray-800" : "contact__option2 bg-gray-300"}`}>
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Kendy Elisca</h5>
            <a
              href="https://wa.me/50936222737/?text=Hi%20Kendy.%20I%20saw%20your%20Portfolio%20and%20wanted%20to%20contact%20you."
              className={`${darkMode ? "text-white" : "text-black"}`}
              target="_blank"
            >
            {t('ButtonC')}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
