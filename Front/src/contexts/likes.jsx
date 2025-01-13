import { useContext, createContext } from "react";

const LikesContext = createContext();

export const Likes = ({ children }) => {
  const takeLikes = async (id_user) => {
    const response = await fetch(`http://localhost:80/like?iduser=${id_user}`, {
      method: "GET",
    });

    if (response.ok) {
      return response.json();
    }
  };

  const makeLike = async (id_movie, id_user) => {
    const jsonOBJ = {
      id_movie: id_movie,
      id_user: id_user,
    };
    const json = JSON.stringify(jsonOBJ);
    const response = await fetch("http://localhost:80/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });

    if (!response.ok) {
      console.log("not ok");
    }
  };

  const unMakeLike = async (id_movie, id_user) => {
    const json = {
      id_movie: id_movie,
      id_user: id_user,
    };
    const response = await fetch("http://localhost:80/like", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });
    if (!response.ok) {
      console.log("not ok");
    }
  };
  return (
    <LikesContext.Provider value={{ unMakeLike, makeLike, takeLikes }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => {
  const context = useContext(LikesContext);

  if (!context) {
    throw new Error(
      "useAuthenticator must be used within an AuthenticatorProvider"
    );
  }
  return context;
};
