import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';
import { useTranslation } from 'react-i18next';

const ContactForm = ({ onClose, darkMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true before making the request
    axios
      .post('https://email-backend-6kh4.onrender.com/emails/contact', {
        name,
        email,
        message,
      })
      .then((response) => {
        console.log(response.data);
        setIsSuccess(true); // Show the success message after form is closed
        onClose(); // Close the form after successful submission
        alert('sent successfully');
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false); // Reset loading state when the request is completed (whether success or error)
      });
  };

  const handleCloseForm = () => {
    onClose();
    setIsSuccess(false); // Reset isSuccess to false when the form is closed
  };

  return (
    <div className={`${darkMode ? 'popup2' : 'popup'}`}>
      <span className="close" onClick={handleCloseForm}>
        &times;
      </span>
      <h2> {t('titleForm')}</h2>
      {isSuccess ? (
        <p className="success-message">{t('successMessage')}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            className="text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('Name')}
            required
          />

          <input
            type="email"
            id="email"
            className="text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('Email')}
            required
          />

          <textarea
            id="message"
            className="text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t('Message')}
            required
          />
          <button type="submit" disabled={isLoading} className="bg-red-400">
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
