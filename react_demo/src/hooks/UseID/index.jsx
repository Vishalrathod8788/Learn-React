import { useId } from "react";

export const UseID = () => {
  const id = useId();

  return (
    <form>
      <div>
        <label htmlFor={id + "usernameId"}>Username</label>
        <input type="text" id={id + "usernameId"} name="username" />
      </div>
      <div>
        <label htmlFor={id + "passwordId"}>Password</label>
        <input type="password" id={id + "passwordId"} name="passwordId" />
      </div>
      <div>
        <label htmlFor={id + "emailId"}>Email</label>
        <input type="email" id={id + "emailId"} name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
