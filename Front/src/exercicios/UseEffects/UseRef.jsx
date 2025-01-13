import { useEffect, useState, useRef } from "react";

function UseRef() {
  const [name, setName] = useState("opa");

  const ref = useRef(name);

  useEffect(() => {
    ref.current = name;
  }, [name]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="border border-slate-300 outline-slate-400 px-4 py-2"
      />
      <h3>{ref.current}</h3>
    </div>
  );
}

export default UseRef;
