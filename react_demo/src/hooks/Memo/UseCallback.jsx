import { memo, useCallback, useMemo, useState } from "react";

const Botton = memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);

  return (
    <button
      className={`text-black mb-4 py-2 px-5 ${
        children === "Increment" ? "bg-green-400" : "bg-red-400"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
export const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("increment inside");
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("decrement inside");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <>
      <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white ">
        <h1 className=" mb-4">Counts : {count}</h1>
        <Botton onClick={increment}>Increment</Botton>
        <Botton onClick={decrement}>Decrement</Botton>
      </div>
    </>
  );
};
