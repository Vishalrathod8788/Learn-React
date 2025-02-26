import { useState } from "react";
import "./CSS/useState.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrement = () => {
    setCount(count + step);
    console.log(count);
    // if (count == 100) setCount(100);  // Validation
  };

  const handleDecrement = () => {
    setCount(count - step);
    console.log(count);
    // if (count == 0) setCount(0);   // Validation
  };
  return (
    <div className="short-circuit">
      <h2>Counter Example</h2>

      <div className="message">Counter: {count}</div>
      <input
        className="input"
        type="number"
        placeholder="Type somethings..."
        name="step"
        value={step}
        onChange={(e) => {
          setStep(Number(e.target.value));
        }}
      />
      <style>{`
        
      `}</style>
      <div className="button-group">
        <button onClick={handleIncrement} disabled={count >= 100}>
          Increment
        </button>
        <button onClick={handleDecrement} disabled={count <= 0}>
          Decrement
        </button>
        <button
          onClick={() => {
            setCount(0);
            setStep(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
