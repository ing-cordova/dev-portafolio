import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { contactSection } from "../../portfolio";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_EMAILJS_TOKEN,
      process.env.REACT_APP_TEMPLATE_EMAILJS_TOKEN,
      form.current,
      process.env.REACT_APP_USER_ID_EMAILJS_TOKEN
    );

    e.target.reset();
  };

  if (!contactSection.display) {
    return null;
  }
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contactSection.wayToContact.map(({ id, icon, name, contact }) => {
            return (
              <article className="contact__option" key={id}>
                {icon &&
                  React.createElement(icon, {
                    className: "contact__option-icon",
                  })}
                <h4>{name}</h4>
                <h5>{contact}</h5>
                {name === "Whatsapp" ? (
                  <a
                    href={`https://wa.me/${contact}/?text=Hello!`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Send a message
                  </a>
                ) : name === "Email" ? (
                  <a href={`mailto:${contact}`}>Send a message</a>
                ) : (
                  <a href={contact} target="_blank" rel="noreferrer">
                    Send a message
                  </a>
                )}
              </article>
            );
          })}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name here"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email here"
            required
          />
          <textarea
            name="message"
            rows={10}
            placeholder="Your message here"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
