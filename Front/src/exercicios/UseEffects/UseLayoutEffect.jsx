import { useLayoutEffect, useState } from "react";

function LayoutEffect() {
  const [count, setCount] = useState(1);

  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="h-screen w-screen flex justify-center items-center gap-4 flex-col">
      <h2>{count}</h2>
      <button
        className="bg-slate-300 border border-slate-500 w-12 rounded-md"
        onClick={() => setCount((prev) => prev + 1)}
      >
        opa
      </button>
      <h1>
        aqui a diferença do use efect pro uselayouteffect é que o useEffect
        normal só é executado após o dom ser totalmente carregado carregado.
        Enqaunto o useLayoutEffect é executado antes ou durante o carregamento
      </h1>
    </div>
  );
}

export default LayoutEffect;
