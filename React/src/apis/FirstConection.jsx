import { useEffect, useState } from "react";

function First() {
  const [ApiData, setApiData] = useState([]);
  const [className, setClassName] = useState(
    "flex flex-col gap-2 bg-slate-500 p-10 border hidden border-slate-900 rounded-md"
  );

  function getData() {
    const ayncForThisFunction = async () => {
      try {
        const response = await fetch("http://localhost:80/usuarios", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
        setApiData(data);
      } catch (e) {
        console.log(e);
      }
    };

    ayncForThisFunction();
  }

  useEffect(() => {
    if (ApiData.length !== 0) {
      setClassName(
        "flex flex-col gap-2 bg-slate-500 p-10 border border-slate-900 rounded-md"
      );
    }
  }, [ApiData]);

  return (
    <div className="h-screen w-screen flex justify-center items-center gap-4 flex-col">
      <div className="flex flex-col gap-2 w-5">
        <h2>First Conection</h2>
        <button
          className="bg-slate-300 border border-slate-500 w-20 rounded-md"
          onClick={() => getData()}
        >
          Resgatar Dados
        </button>
      </div>
      <div className={className}>
        <ul className="bg-slate-300 p-10 border border-slate-900 rounded-md">
          {ApiData.map((item) => {
            return (
              <li
                className="p-2 m-2 border border-slate-900 rounded-lg"
                key={item.id}
              >
                <p>
                  <strong>Nome: </strong>
                  {item.nome}
                </p>
                <p>
                  <strong>Idade: </strong>
                  {item.idade}
                </p>
                <p>
                  <strong>E-mail: </strong>
                  {item.e_mail}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default First;
