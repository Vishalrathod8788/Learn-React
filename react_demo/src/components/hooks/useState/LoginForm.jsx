import { useState } from "react";
import "./CSS/LoginForm.css";
export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(`Username : ${username} Password : ${password}`);
  };

  return (
    <div>
      <h1 className="log-in">Login Form</h1>
      <form className="registration-form" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <p>
            {username} {password}
          </p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
