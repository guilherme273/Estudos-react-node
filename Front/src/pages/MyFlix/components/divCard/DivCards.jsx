import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import "./DivCardStyle.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLikes } from "../../../../contexts/likes";
import { useAuthenticator } from "../../../../contexts/login";

function DivCards({ movies, title = "", allMovies }) {
  const cards = useRef(null);
  // const [likes, setLikes] = useState([]);
  const { makeLike, takeLikes } = useLikes();
  const { getUser } = useAuthenticator();

  const deuLike = async (movie_id) => {
    const userSTR = await getUser();
    const userOBJ = await JSON.parse(userSTR);
    await makeLike(movie_id, userOBJ.id);
    const newLikesList = await takeLikes(userOBJ.id);
    setLikes(newLikesList);
  };

  const scrolLeft = (e) => {
    e.preventDefault();
    cards.current.scrollLeft -= cards.current.offsetWidth;
  };
  const scrolRigth = (e) => {
    e.preventDefault();
    cards.current.scrollLeft += cards.current.offsetWidth;
  };
  return (
    <div className="div-card">
      <h2>{title}</h2>
      <div className="cards" ref={cards}>
        {movies.map((movie) => {
          return (
            <div className="div-icon-and-link-img" key={movie.id}>
              <Link
                to={"/assistir"}
                state={{
                  listMovies: movies,
                  movieId: movie.id,
                  allMovies: allMovies,
                  cat: movie.category,
                }}
                className="image-container"
              >
                <img src={movie.cover} alt="Capa" className="image" />
              </Link>

              <img
                onClick={() => deuLike(movie.id)}
                className="icon"
                src="/public/img/coracao-preenchido.png"
              />

              <Heart
                onClick={() => deuLike(movie.id)}
                className="icon"
                size={38}
              />
            </div>
          );
        })}
      </div>

      <div className="buttons">
        <button onClick={(e) => scrolLeft(e)}>
          <ChevronLeft size={40} />
        </button>
        <button onClick={(e) => scrolRigth(e)}>
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default DivCards;
