import { useState } from "react";
import "./hooks.css";

export const ShortCircuite = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginState = () => {
    setisLoggedIn(!isLoggedIn);
  };

  const handleUserState = () => {
    setUser("Vishal Rathod");
  };

  const handleClearUserState = () => {
    setUser(null);
  };

  return (
    <div className="short-circuit">
      <h2>Short Circuit Example</h2>

      <div className="button-group">
        <button onClick={handleLoginState}>Toggle Login</button>
        <button onClick={handleUserState}>Set User</button>
        <button onClick={handleClearUserState}>Clear User</button>
      </div>

      <div className="message">
        {isLoggedIn && <p>User is logged in!</p>}
        {!isLoggedIn && <p>User is logged out!</p>}
        {user ? `Welcome, ${user}!` : <p>Welcome, Guest!</p>}
      </div>
    </div>
  );
};
