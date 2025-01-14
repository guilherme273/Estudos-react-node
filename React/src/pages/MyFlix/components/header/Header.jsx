import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import { useAuthenticator } from "../../../../contexts/login";

function Header({ allMovies }) {
  const { deslogar, logado } = useAuthenticator();
  const sair = () => {
    deslogar();
  };
  return (
    <header className="header">
      <Link to="/myflix" className="link-logo">
        <span className="g">G Flix</span>
      </Link>

      <nav className="nav">
        <Link to="/myflix">Home</Link>

        <Link state={{ allMovies: allMovies }} to="/pesquisar">
          Pesquisar
        </Link>
        <Link to="/myflix">Favoritos</Link>
      </nav>
      {logado ? <Link onClick={() => sair()}>Sair</Link> : ""}
    </header>
  );
}

export default Header;
