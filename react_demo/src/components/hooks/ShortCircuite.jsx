import { useState } from "react";
import "./hooks.css";

export const ShortCircuite = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleSetUser = () => {
    setUser("John Doe");
  };

  const handleClearUser = () => {
    setUser("");
    setIsLoggedIn(false);
  };

  return (
    <div className="short-circuit">
      <h2>Short Circuit Example</h2>

      <div className="button-group">
        <button onClick={handleLogin}>Toggle Login</button>
        <button onClick={handleSetUser}>Set User</button>
        <button onClick={handleClearUser}>Clear User</button>
      </div>

      <div className="message">
        {isLoggedIn && <p>User is logged in!</p>}
        {!isLoggedIn && <p>User is logged out!</p>}
        {user && <p>Welcome, {user}!</p>}
      </div>
    </div>
  );
};
