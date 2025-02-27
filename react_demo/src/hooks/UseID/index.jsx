import { useId } from "react";

export const UseID = () => {
  const usernameId = useId();
  const emailId = useId();

  return (
    <form>
      <div>
        <label htmlFor={usernameId}>Username</label>
        <input type="text" id={usernameId} name="username" />
      </div>
      <div>
        <label htmlFor={emailId}>Email</label>
        <input type="email" id={emailId} name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
