import { useState } from "react";

function Exercises() {
  const [number, setNumber] = useState(0);

  function takeIncrement() {
    let newValue = number + 1;
    setNumber(newValue);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="space-y-4 w-[500px]">
        <span>{number}</span>
        <button
          onClick={() => takeIncrement()}
          className="bg-slate-500 text-white pc-4 py-2 rounded-md font-medium"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Exercises;
