import { useState } from "react";
import "./CSS/ContactForm.css";

export const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div>
        <h1 className="contact-title">Contact Form</h1>
        <form className="contact-form" onSubmit={}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={username} onChange={} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" value={message} onChange={} required />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};
