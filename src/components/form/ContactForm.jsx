import React, { useState } from 'react';
import axios from 'axios';
import './contact.css'
import { useTranslation } from 'react-i18next';
const ContactForm = ({ onClose, darkMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { t } = useTranslation();
  const handleSubmit = (e) => {
   
    e.preventDefault();  
        onClose(); // Close the form after successful submission
  };

  return (
    <div className={`${darkMode ? "popup2" : "popup"}`}>
      <span className="close" onClick={onClose}>&times;</span>
      <h2> {t('titleForm')}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{t('Name')}</label>
        <input
          type="text"
          id="name"
          className='text-black'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">{t('Email')}</label>
        <input
          type="email"
          id="email"
          className='text-black'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">{t('Message')}</label>
        <textarea
          id="message"
          className='text-black'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default ContactForm;
