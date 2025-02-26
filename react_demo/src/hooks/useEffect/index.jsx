import { useState, useEffect } from "react";
import "./CSS/index.css";

export const ReactUseEffect = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(Date.now());
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Effect for timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Effect for window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="effect-demo">
        <div className="counter-section">
          <h2>Counter with Effect</h2>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>

        <div className="timer-section">
          <h2>Timer Example</h2>
          <p>Time: {new Date(time).toLocaleTimeString()}</p>
        </div>

        <div className="window-size">
          <h2>Window Size Tracker</h2>
          <p>Width: {windowSize.width}px</p>
          <p>Height: {windowSize.height}px</p>
        </div>
      </div>
    </>
  );
};
