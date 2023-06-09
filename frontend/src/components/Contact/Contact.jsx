import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  window.scrollTo(0, 0);
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nuds6uh",
        "template_wqxi52c",
        form.current,
        "TN-JTD3xCqOYhfdIp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Message sent");
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have a question or want to learn more about our services? <br />
        Send us a message below and we'll get back to you as soon as possible.
      </p>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="3" cols="50" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
