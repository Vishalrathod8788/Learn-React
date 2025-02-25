import "./index.css";
import { useRef } from "react";

export const UseRefs = () => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  console.log(nameRef, passwordRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value, passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Username">Username</label>
      <br />
      <input type="text" id="name" ref={nameRef} />
      <br />
      <label htmlFor="Password">Password</label>
      <br />
      <input type="text" id="password" ref={passwordRef} />
      <br />
      <button>Submit</button>
    </form>
  );
};
