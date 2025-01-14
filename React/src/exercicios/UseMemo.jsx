import { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const doubleNumber = () =>
    useMemo(() => {
      return slowFunction(number);
    }, [number]);

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />

      <p>{text}</p>
      <p>{number}</p>
    </div>
  );

  function slowFunction(number) {
    console.log("aguardando o for...");
    for (let index = 0; index < 100000; index++) {
      1 + 1;
    }
    console.log("depois do for");
    setNumber(number * 2);
  }
}

export default UseMemo;
