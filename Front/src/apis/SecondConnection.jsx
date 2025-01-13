import { useRef } from "react";

function Usuarios() {
  const inputNome = useRef();
  const inputIdade = useRef();
  const inputEmail = useRef();

  const enviarDados = async () => {
    console.log(inputNome.current.value);

    const data = {
      nome: inputNome.current.value,
      idade: inputIdade.current.value,
      e_mail: inputEmail.current.value,
    };
    const response = await fetch("http://localhost:80/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log(response);
    } else {
      console.log("deu ruim");
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-950 flex flex-col  items-center">
      <h1 className="text-slate-200 mt-20 text-lg"> Cadastro de Usuários</h1>
      <section className="m-12 flex flex-col items-center">
        <form
          action=""
          className="bg-slate-400 border rounded-md p-10 flex flex-col gap-6"
        >
          <input
            className="text-slate-950 border border-e-blue-400 rounded-md p-1 placeholder:text-sm placeholder:text-cyan-950  "
            type="text"
            ref={inputNome}
            name="nome"
            placeholder="Digite o Nome"
          />

          <input
            className="text-slate-950 border border-e-blue-400 rounded-md p-1 placeholder:text-sm placeholder:text-cyan-950  "
            type="number"
            ref={inputIdade}
            name="idade"
            placeholder="Digite a Idade"
          />

          <input
            className="text-slate-950 border border-e-blue-400 rounded-md p-1 placeholder:text-sm placeholder:text-cyan-950  "
            type="text"
            ref={inputEmail}
            name="email"
            placeholder="Digite o Email"
          />
          <button
            type="button"
            onClick={() => enviarDados()}
            className="w-auto bg-slate-700 border rounded-lg hover:text-white hover:bg-black"
          >
            Cadastrar
          </button>
        </form>
      </section>

      <section>
        <h2>lista dos usuários fazer com paginação</h2>
      </section>
    </div>
  );
}
export default Usuarios;
