import "./LoginForm.css";
export const LoginForm = () => {
  return (
    <div>
      <h1 className="log-in">Login Form</h1>
      <form className="registration-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
