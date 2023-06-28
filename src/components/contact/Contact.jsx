import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8m1npef",
      "template_wyxzlsh",
      form.current,
      "63ir2P71RWUmlLUHo"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>andrescordovaoficial@gmail.com</h5>
            <a href="mailto:andrescordovaoficial@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+503 79677324</h5>
            <a
              href="https://wa.me/50379677324/?text=Hello!"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
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
