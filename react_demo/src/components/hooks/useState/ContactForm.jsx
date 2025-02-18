import { useState } from "react";
import "./CSS/ContactForm.css";

export const ContactForm = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const [contacts, setContacts] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setContacts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const ContactData = {
      username: contacts.username,
      email: contacts.email,
      message: contacts.message,
    };
    console.log(ContactData);
  };

  return (
    <>
      <div>
        <h1 className="contact-title">Contact Form</h1>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   const ContactData =  {
          //     username,
          //     email,
          //     message,
          //   };

          //   console.log(ContactData);
        >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={contacts.username}
              // onChange={(e) => setUsername(e.target.value)}
              onChange={handleChangeInput}
              required
              autoCapitalize="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={contacts.email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={contacts.message}
              // onChange={(e) => setMessage(e.target.value)}
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};
