import { useReducer, useState } from "react";
import { v4 } from "uuid";

function Reduce() {
  ///////////
  const reducer = (state, action) => {
    switch (action.type) {
      case "add-task":
        return {
          tasks: [
            ...state.tasks,
            { id: v4(), nome: action.payload, isCompleted: false },
          ],
        };

      case "trade-situation":
        return {
          ...state,
          tasks: state.tasks.map((task, index) =>
            index === action.payload
              ? { ...task, isCompleted: !task.isCompleted }
              : task
          ),
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, { tasks: [] });
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex gap-2">
      <input
        className="border border-slate-600"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "add-task", payload: inputValue })}
      >
        Adicionar
      </button>

      {state.tasks.map((task, index) => {
        return (
          <p
            style={{
              textDecoration: task.isCompleted ? "line-through" : "none",
            }}
            onClick={() =>
              dispatch({ type: "trade-situation", payload: index })
            }
            key={task.id}
          >
            {task.nome}
          </p>
        );
      })}
    </div>
  );
}

export default Reduce;
