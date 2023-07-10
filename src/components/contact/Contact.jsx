import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact" className="pt-8">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kendyelisca5@gmail.com</h5>
            <a
              href="mailto:kendyelisca5@gmail.com"
              target="_blank"
              className="text-white"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Kendyelisca</h5>
            <a
              href="https://web.facebook.com/messages/t/100057301837801"
              target="_blank"
              className="text-white"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Kendy Elisca</h5>
            <a
              href="https://wa.me/50936222737/?text=Hi%20Kendy.%20I%20saw%20your%20Portfolio%20and%20wanted%20to%20contact%20you."
              className="text-white"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
