import { useReducer } from "react";

export const UseReducer = () => {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
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

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    if (state.count === 0) {
      return;
    }
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">{state.count}</h1>
        <button
          className="bg-slate-400 p-2 rounded-md m-2"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="bg-slate-400 p-2 rounded-md m-2"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="bg-slate-400 p-2 rounded-md m-2"
        >
          Reset
        </button>
      </div>
    </>
  );
};
