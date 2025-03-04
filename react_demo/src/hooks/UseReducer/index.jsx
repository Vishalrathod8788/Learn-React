import { useReducer } from "react";

export const UseReducer = () => {
  
  const initialState = {
    count: 0,
  };

  const reducre = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducre, initialState);

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
        <h1 className="text-3xl font-bold">{state.count}</h1>
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
