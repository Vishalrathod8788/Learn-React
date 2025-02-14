import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div className="toggle-container">
      <div
        className={`large-toggle-switch ${isOn ? "on" : "off"}`}
        onClick={toggleSwitch}
      >
        <div className="switch-handle"></div>
      </div>
      <p className="switch-label">{isOn ? "ON" : "OFF"}</p>
    </div>
  );
};
