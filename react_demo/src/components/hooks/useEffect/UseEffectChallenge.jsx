//? 1. counter that increments when a button is clicked
//? 2. An input field where users can type their name
//? 3. The Document Title  will update to show the current count
import { useEffect } from "react";
import { useState } from "react";
import "./CSS/UseEffectChallenge.css";

export const UseEffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count : ${count}`;
    console.log(name);
    console.log(count);
  }, [count, name]);

  const handleChange = (e) => {};
  return (
    <div className="effect-challenge">
      <h1 className="challenge-title">UseEffect Challenge</h1>

      <div className="counter-section">
        <p className="counter">Counter : {count}</p>
        <button className="counter-btn" onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>

      <div className="name-section">
        <p className="name">Name : {name}</p>
        <input
          type="text"
          name="name"
          className="name-input"
          placeholder="Enter your name"
          required
          autoComplete="off"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
