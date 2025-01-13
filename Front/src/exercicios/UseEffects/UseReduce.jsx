import { useReducer } from "react";

function Reduce() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };

      case "decrement":
        return { count: state.count - 1 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 1 });

  return (
    <div>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default Reduce;
