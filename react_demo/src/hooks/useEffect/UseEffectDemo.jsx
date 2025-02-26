import { useState, useEffect } from "react";

export const UseEffectDemo = () => {
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log("Count Value : ", count);
  //   }, [count]);

  const [time, setTime] = useState(Date.now());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      const UpdatedDate = new Date();
      setTime(UpdatedDate.toLocaleTimeString());
    }, 1000);
    console.log("Time Value : ", time);
  }, [time]);

  useEffect(() => {
    const DateTimer = setInterval(() => {
      setDate(Date.toString());
    }, 1000);
    return () => clearInterval(DateTimer);
  }, [date]);
  return (
    // <div className="use-effect-demo">
    //   <h1>UseEffect Hook</h1>
    //   <p>Count : {count}</p>
    //   <button onClick={() => setCount(count + 1)}>Click Me </button>
    // </div>
    <div className="use-effect-demo">
      <h1>UseEffect Hook</h1>
      {/* <p>Date : {date}</p> */}
      <p>Time : {time}</p>
      {/* <button onClick={() => setCount(count + 1)}>Click Me </button> */}
    </div>
  );
};
