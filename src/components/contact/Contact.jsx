import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 className="title">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>nicolo.nicolo@nicolo.com</h5>
            <a
              href="mailto:nicolo.nicolo@nicolo.com"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>nicolo.nicolo@nicolo.com</h5>
            <a
              href="mailto:nicolo.nicolo@nicolo.com"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>nicolo.nicolo@nicolo.com</h5>
            <a
              href="https://api.whatsapp.com/send?phone+4915204134322"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>
        </div>
        <form>
          <input type="text" name='name' placeholder="Your Full Name" required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
