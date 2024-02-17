import { createContext, useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

export const GlobalContext = createContext();
const MainContext = ({ children }) => {
  const [upNext, setUpNext] = useState();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=38bb64131f6a09cb91a161b833a0f5e1"
    )
      .then((res) => res.json())
      .then((data) => setUpNext(data.results));
  }, []);

  // Toast
  const success = (message) => {
    toast.success(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

// Watch list controller
const addToWatchList = (movie) => {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
    success("Added to watchlist!");
  };
  

  const info = {
    upNext,
    addToWatchList
  };
  return (
    <GlobalContext.Provider value={info}>{children}</GlobalContext.Provider>
  );
};

export default MainContext;
