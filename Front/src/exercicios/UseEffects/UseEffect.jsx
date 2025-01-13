import { useEffect, useState } from "react";
import Button from "../../components/Button";

function UseEff() {
  const [tradeValueOfApi, setTradeValueOfApi] = useState("posts");
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const OnlyOne = async () => {
      if (tradeValueOfApi === "api") {
        const newResponse = await fetch("http://localhost:80/home");
        const responseJSON = await newResponse.json();
        console.log(responseJSON);
        setItens(responseJSON);
        return;
      }

      const newResponse = await fetch(
        `https://jsonplaceholder.typicode.com/${tradeValueOfApi}`
      );
      const responseJSON = await newResponse.json();

      setItens(responseJSON);
    };

    OnlyOne();
  }, [tradeValueOfApi]);

  useEffect(() => {
    console.log("primeira vez");

    return () => {
      console.log("saindo..");
    };
  }, []);

  const tradeValue = (value) => {
    setTradeValueOfApi(value);
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="space-y-4 w-[500px]">
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">
          <div className="flex flex-row gap-5">
            <Button onClick={() => tradeValue("posts")}>post</Button>
            <Button onClick={() => tradeValue("comments")}>coment</Button>
            <Button onClick={() => tradeValue("todos")}>todos</Button>
            <Button onClick={() => tradeValue("api")}>dadosAPI</Button>
          </div>
        </div>
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
          {itens.map((iten) => {
            return (
              <li key={iten.id} className="flex gap-2">
                {iten.title || iten.id}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default UseEff;
