function FooterForm() {
  return (
    <div className="">
      <div className="w-96 h-16 flex flex-col justify-center items-center gap-2 border border-slate-400 rounded-md">
        <p>
          Não tem uma conta?{" "}
          <a href="" className="text-blue-700">
            {" "}
            Cadastre-se
          </a>
        </p>
      </div>
      <p className="flex justify-center mt-4">Obtenha o aplicativo.</p>
      <div className="w-96 grid grid-cols-2 grid-rows-1 place-items-center gap-0 mt-4">
        <a href="">
          {" "}
          <img
            src="../../../public/apple.png"
            className="w-40 col-span-1"
            alt="Apple"
          />
        </a>

        <a href="">
          {" "}
          <img
            src="../../../public/google.png"
            className="w-40 col-span-1"
            alt="Google"
          />
        </a>
      </div>
    </div>
  );
}

export default FooterForm;
