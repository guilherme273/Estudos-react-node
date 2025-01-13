import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Container from "./components/container/Container";
import "./MyFlixStyle.css";
import { useEffect, useState } from "react";

function MyFlix() {
  const [allMovies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch("http://localhost:80/get-all-movies", {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();

          setMovies(data);
        } else {
          console.log("erro na busca ");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <Header allMovies={allMovies} setMovies={setMovies} />
      <Banner />
      <Container allMovies={allMovies} />
      <Footer />
    </div>
  );
}

export default MyFlix;
