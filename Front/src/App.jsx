/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import CreateTasks from "./components/CreateTasks";
import TasksList from "./components/TasksList";
import { v4 } from "uuid";

import "./index.css";

function App() {
  const [Tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  }, [Tasks]);

  useEffect(() => {
    const awaitForThis = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await response.json();
      setTasks(data);
    };
    awaitForThis();
  }, []);

  function tradeStateTasks(idTask) {
    const newTasks = Tasks.map((Task) => {
      if (idTask === Task.id) {
        return { ...Task, isCompleted: !Task.isCompleted };
      }
      return Task;
    });
    setTasks(newTasks);
  }

  function deleteTask(idTask) {
    const newTasks = Tasks.filter((task) => task.id !== idTask);
    setTasks(newTasks);
  }

  function AddTask(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...Tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="space-y-4 w-[500px]">
        <h1 className="text-3xl text-slate-100 font bold text-center">
          Task Manager
        </h1>
        <CreateTasks propsAddTask={AddTask} />
        <TasksList
          propsTasksList={Tasks}
          propsTradeStateTasks={tradeStateTasks}
          propsDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
