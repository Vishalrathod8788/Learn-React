import { useMemo, useState } from "react";

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

const ExpensiveCompo = () => {
  const sum = () => {
    let ans = 0;
    for (let i = 0; i < 2000000000; i++) {
      ans += 1;
    }
    return ans; // Return the computed value
  };

  const total = useMemo(() => sum(), []); // Memoize the computed value

  return <p>{total}</p>;
};
