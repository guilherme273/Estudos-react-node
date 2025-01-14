import { useState } from "react";
function App() {
  const [message, setMessage] = useState("Gerenciador De Tarefas");

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Hello Word!");
        }}
      >
        Trocar Mensagem (Atualizando o Componente)
      </button>
    </div>
  );
}

export default App;
