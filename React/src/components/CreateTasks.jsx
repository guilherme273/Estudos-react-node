/* eslint-disable no-unused-vars */
import { useState } from "react";
import Input from "./input";

function CreateTasks(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="my-4 space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Write the task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="description"
        placeholder="Write the task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={() => {
          props.propsAddTask(title, description);
          setDescription("");
          setTitle("");
        }}
        className="bg-slate-500 text-white pc-4 py-2 rounded-md font-medium"
      >
        Add
      </button>
    </div>
  );
}

export default CreateTasks;
