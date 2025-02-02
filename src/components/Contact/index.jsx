import React from 'react';
import { contacts } from '../../data';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="bg__image"></div>
      <div className="overlay"></div>
      
      <div className="container">
        <div className="column">
          {contacts.map((contact, index) => (
            <div className="contact__info" key={index}>
              <div className="icon__container">
                {contact.icon}
              </div>
              <div className="details">
                <p className="text__muted">{contact.name}</p>
                <h3 className="value">{contact.value}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="column form__container">
          <div className="form__top">
            <h3 className="sub__title g-text">Keep In Touch</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="form__middle">
            <div className="row">
              <input type="text" placeholder="First Name" name="firstname" className="control" />
              <input type="text" placeholder="Last Name" name="lastname" className="control" />
            </div>

            <div className="row">
              <input type="email" placeholder="Email" name="email" className="control" />
              <input type="tel" placeholder="Phone number" name="phone" className="control" />
            </div>

            <textarea className="control" name="message" cols={30} rows={5} placeholder="Message"></textarea>
          </div>

          <div className="form__bottom">
            <button className="btn btn__primary">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
