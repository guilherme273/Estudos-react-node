import { useEffect, useState } from "react";

function List({ getItems }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    getItems(2).then((result) => setList(result));
  }, [getItems]);

  return (
    <div className="flex flex-col border border-slate-500 rounded-md bg-slate-500 p-5">
      <div className="flex flex-col border border-slate-500 bg-slate-50 p-2 rounded-md">
        <ul>
          {list.map((item) => {
            return <li key={item.id}>{item.title ? item.title : item.body}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default List;
