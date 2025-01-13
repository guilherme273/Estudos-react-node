import { Link } from "react-router-dom";
import "./HeaderStyle.css";

function Header({ allMovies }) {
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
    </header>
  );
}

export default Header;
