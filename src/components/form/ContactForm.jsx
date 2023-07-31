import React, { useState } from 'react';
import axios from 'axios';
import './contact.css'
const ContactForm = ({ onClose, darkMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/send-email', { name, email, message })
      .then((response) => {
        console.log(response.data);
        onClose(); // Close the form after successful submission
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={`${darkMode ? "popup2" : "popup"}`}>
      <span className="close" onClick={onClose}>&times;</span>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          className='text-black'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          className='text-black'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
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
