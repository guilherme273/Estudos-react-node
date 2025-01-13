function Form() {
  return (
    <form
      action=""
      className="w-96 h-100 flex flex-col justify-center items-center gap-5 border border-slate-400 rounded-md"
    >
      <img src="../../../public/insta-logo.png" className="w-40 " alt="" />
      <input
        type="text"
        className="w-80 h-9 border rounded-sm border-slate-500"
        placeholder="  Telefone, nome de usuário ou e-mail"
      />
      <input
        className="w-80 h-9 border rounded-sm border-slate-500"
        type="password"
        placeholder="  Senha"
      />
      <button className="bg-blue-500 h-9 w-80 border rounded-lg text-slate-50 hover:bg-blue-400 hover:text-white">
        Entrar
      </button>
      <p>---------------------- OU ----------------------</p>
      <div className="flex flex-row gap-1 justify-center">
        <img
          src="../../../public/70f936294a1f0f3949a9205df9340d5e.png"
          className="w-8"
          alt=""
        />
        <a href="" className="mt-1 text-blue-700 text-sm">
          <b>Entrar com o Facebook</b>
        </a>
      </div>

      <a href="" className="py-5 text-blue-700 text-sm">
        Esqueceu a senha?
      </a>
    </form>
  );
}

export default Form;
