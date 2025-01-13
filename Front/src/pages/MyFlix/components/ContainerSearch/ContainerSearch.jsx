import { Link } from "react-router-dom";
import "./ContainerSearchStyle.css";
function ContainerSearch({ allMovies, moviesSearch }) {
  return (
    <div className="container-search">
      {allMovies === moviesSearch ? (
        <h1>{`Todos os videos (total de ${allMovies.length})`}</h1>
      ) : (
        <h1>{`${moviesSearch.length} Resultados Encontrados`}</h1>
      )}

      <div className="todos-os-videos">
        {moviesSearch.map((movie) => {
          return (
            <Link
              key={movie.id}
              to={"/assistir"}
              state={{
                listMovies: moviesSearch,
                movieId: movie.id,
                allMovies: allMovies,
                cat: movie.category,
              }}
              className="image-container"
            >
              <img src={movie.cover} alt="Capa" className="image" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ContainerSearch;
