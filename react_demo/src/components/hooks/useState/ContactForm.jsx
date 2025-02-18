export const ContactForm = () => {
  return (
    <>
      <div>
        <h1 className="contact-title">Contact Form</h1>
        <form className="contact-form" onSubmit={(e) => {
          e.preventDefault();
          console.log(`Username: ${username}, Password: ${password}, Message: ${message}`);
        }}>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password" 
              value={password}
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
          .contact-title {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
          }

          .contact-form {
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          .form-group {
            margin-bottom: 15px;
          }

          .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #555;
          }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
          }

          .form-group textarea {
            height: 100px;
            resize: vertical;
          }

          button {
            background: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
          }

          button:hover {
            background: #0056b3;
          }
        `}</style>
      </div>
    </>
  );
};
