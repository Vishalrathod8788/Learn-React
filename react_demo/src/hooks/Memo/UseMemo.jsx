import { memo, useState } from "react";

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <ExpensiveCompo />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

const ExpensiveCompo = memo(() => {
  let i = 0;
  while (i < 2000000000) i++;
  return (
    <>
      <p>{i}</p>
    </>
  );
});
