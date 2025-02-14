import { useState } from "react";

export const LiftStateUp = () => {
  const [Input, setInput] = useState("");
  return (
    <>
      <InputComponent Input={Input} setInput={setInput} />
      <DisplayComponent Input={Input} />
    </>
  );
};

const InputComponent = ({ Input, setInput }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your text here"
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setInput("")}>Clear</button>
    </>
  );
};

const DisplayComponent = ({ Input }) => {
  return (
    <>
      <div className="div-main">
        <h1>{Input}</h1>
      </div>
    </>
  );
};
