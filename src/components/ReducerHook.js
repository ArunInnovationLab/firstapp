import { useReducer } from "react";

function reduce(state, action) {
  if (action.type === "increment_age") {
    return {
      age: state.age + 1,
    };
  }

  if (action.type === "decrement_age") {
    return {
      age: state.age - 1,
    };
  }
  throw Error("unknown action");
}

export default function ReducerDemo() {
  const [state, dispatch] = useReducer(reduce, { age: 33 });

  return (
    <>
      <h2>Age : {state.age}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increment_age" });
        }}
      >
        Increment age
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement_age" });
        }}
      >
        Decrement age
      </button>
    </>
  );
}
