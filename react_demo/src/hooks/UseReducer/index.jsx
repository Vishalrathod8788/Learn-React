import { useReducer } from "react";

export const UseReducer = () => {
  const reducre = (state, action) => {
    if (action.type === "INCREMENT") {
      console.log(state);
      if (state === 20) return 20;
      return state + 1;
    } else if (action.type === "DECREMENT") {
      if (state === 0) return 0;
      return state - 1;
    } else if (action.type === "RESET") {
      return 0;
    }
  };
  const [count, dispatch] = useReducer(reducre, 0);

  const handleIncre = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecre = () => {
    dispatch({ type: "DECREMENT" });
    if (count === 0) {
      return;
    }
  };

  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">{count}</h1>
        <button
          className=" bg-slate-400 p-2 rounded-md m-2 "
          onClick={handleIncre}
        >
          Increment
        </button>
        <button
          className=" bg-slate-400 p-2 rounded-md m-2 "
          onClick={handleDecre}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className=" bg-slate-400 p-2 rounded-md m-2 "
        >
          Reset
        </button>
      </div>
    </>
  );
};
