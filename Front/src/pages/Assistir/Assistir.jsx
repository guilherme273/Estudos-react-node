import { useLocation } from "react-router-dom";
import ContainerAssistir from "../MyFlix/components/ContainerAssistir/ContainerAssistir";
import Footer from "../MyFlix/components/footer/Footer";
import Header from "../MyFlix/components/header/Header";
import DivCards from "../MyFlix/components/divCard/DivCards";

function Assistir() {
  const location = useLocation();
  const { listMovies, movieId, allMovies, valueInputSearch, cat } =
    location.state || {};
  const category = cat;

  return (
    <div>
      <Header allMovies={allMovies} valueInputSearch={valueInputSearch} />
      <ContainerAssistir movieId={movieId} />
      <DivCards title={category} movies={listMovies} allMovies={allMovies} />;
      <Footer />
    </div>
  );
}

export default Assistir;
