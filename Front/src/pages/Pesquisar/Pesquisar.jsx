import { useLocation } from "react-router-dom";
import BannerPesquisa from "../MyFlix/components/bannerPesquisa/Banner";
import Footer from "../MyFlix/components/footer/Footer";
import Header from "../MyFlix/components/header/Header";
import ContainerSearch from "../MyFlix/components/ContainerSearch/ContainerSearch";
import { useState } from "react";

function Pesquisar() {
  const location = useLocation();
  const { allMovies, setMovies } = location.state;
  const [moviesSearch, setMoviesSearch] = useState(allMovies);

  return (
    <div>
      <Header allMovies={allMovies} />
      <BannerPesquisa
        allMovies={allMovies}
        moviesSearch={moviesSearch}
        setMoviesSearch={setMoviesSearch}
      />
      <ContainerSearch
        allMovies={allMovies}
        moviesSearch={moviesSearch}
        setMoviesSearch={setMoviesSearch}
        setMovies={setMovies}
      />
      <Footer />
    </div>
  );
}

export default Pesquisar;
