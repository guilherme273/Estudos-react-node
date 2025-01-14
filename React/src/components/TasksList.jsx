import { CheckIcon, ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function TasksList(props) {
  const navigate = useNavigate();

  function seeTask(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);

    navigate(`/task-detals?${query}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {console.log(props.propsTasksList)}
      {props.propsTasksList.map((task) => {
        return (
          <li className="flex gap-2" key={task.id}>
            <button
              onClick={() => task && props.propsTradeStateTasks(task.id)} // Verifica se 'task' existe
              className={`bg-slate-400 flex w-full text-left text-white p-2 rounded-md ${
                task && task.isCompleted ? "line-through" : ""
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task ? task.title : "Tarefa inexistente"}
              {task && task.isCompleted ? " - ok" : " - not ok"}
            </button>

            <Button onClick={() => seeTask(task)}>
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => props.propsDeleteTask(task.id)}>
              <Trash2 />
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default TasksList;
