import "./CSS/ContactForm.css";
export const ContactForm = () => {
  return (
    <>
      <div>
        <h1 className="contact-title">Contact Form</h1>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(
              `Username: ${username}, Email: ${email}, Message: ${message}`
            );
          }}
        >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Password</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>

        <style>{`
          
        `}</style>
      </div>
    </>
  );
};
