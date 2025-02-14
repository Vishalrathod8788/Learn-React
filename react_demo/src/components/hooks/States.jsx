import { useState } from "react";

export const State = () => {
  alert("State Component Loaded");
  console.log("Parent Component rerednered");
  const handleClickButton = () => {
    setCount(() => count + 1);
  };

  let [count, setCount] = useState(0);
  return (
    <>
      <section
        className="main-div"
        style={{
          flexDirection: "column",
          fontSize: "4rem",
          paddingLeft: "27rem",
        }}
      >
        <h1>{count}</h1>
        <button onClick={handleClickButton}>Increment</button>
      </section>
      <ChildeComponent count={count} />
    </>
  );

  function ChildeComponent() {
    alert("Child Component Loaded");
    console.log("Child Component rerednered");

    return (
      <>
        <div className="main-div">
          <h1>Child Component</h1>
        </div>
      </>
    );
  }
};
