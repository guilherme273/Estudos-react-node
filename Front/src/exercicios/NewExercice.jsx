import { useCallback, useState } from "react";
import List from "../components/List.jsx";

function New() {
  const [type, setType] = useState("posts");
  const [text, setText] = useState("");

  const getItems = useCallback(
    async (Number) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${type}?_limit=10`
      );
      {
        console.log(Number);
      }
      const data = await response.json();

      return data;
    },
    [type]
  );

  return (
    <div className="flex gap-5 mt-5">
      <button
        onClick={() => setType("posts")}
        className="border border-slate-800 bg-slate-500 rounded-md w-20 h-10"
      >
        posts
      </button>
      <button
        onClick={() => setType("comments")}
        className="border border-slate-800 bg-slate-500 rounded-md w-20 h-10"
      >
        coment
      </button>
      <button
        onClick={() => setType("todos")}
        className="border border-slate-800 bg-slate-500 rounded-md w-20 h-10"
      >
        todos
      </button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-slate-500 bg-slate-200 rounded-md w-20 h-10"
      />

      <List getItems={getItems} />
    </div>
  );
}

export default New;
