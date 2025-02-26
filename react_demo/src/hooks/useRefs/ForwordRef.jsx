import { forwardRef, useId, useRef } from "react";
import "./index.css";
export const ForwordRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <BeforeReact19Input label="username" inputRef={username} />
      <BeforeReact19Input label="password" inputRef={password} />

      <button>Submit</button>
    </form>
  );
};

// const BeforeReact19Input = forwardRef((props, ref) => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor="id">{props.label}</label>
//       <input id={id} ref={ref} type="text" />
//     </div>
//   );
// });

//After React 19
const BeforeReact19Input = (props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={props.inputRef} />
    </div>
  );
};
