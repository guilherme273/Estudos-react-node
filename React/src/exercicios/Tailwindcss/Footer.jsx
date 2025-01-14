function Footer() {
  return (
    <div>
      <div className="flex flex-row gap-5 justify-center items-center">
        <ul className="flex flex-row gap-5 justify-center items-center">
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">Meta</a>
          </li>
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">Sobre</a>
          </li>
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">Blog</a>
          </li>
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">Carreiras</a>
          </li>
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">Ajuda</a>
          </li>
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">API</a>
          </li>
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">Privacidade</a>
          </li>
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">Termos</a>
          </li>
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">Localizações</a>
          </li>
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">Instagram Lite</a>
          </li>{" "}
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">Threads</a>
          </li>
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">Carregamentode contatos e não usuários</a>
          </li>
          <li className="text-slate-950 text-sm hover:underline">
            <a href="">Meta Verified</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-row justify-center mt-5 gap-4">
        <select className="text-sm text-slate-950" name="" id="">
          <option value="" selected>
            Português (Brasil)
          </option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
        <p className="text-sm text-slate-950">© 2024 Instagram from Meta</p>
      </div>
    </div>
  );
}

export default Footer;
