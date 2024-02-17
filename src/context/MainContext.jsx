import { createContext, useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

export const GlobalContext = createContext();
const MainContext = ({ children }) => {
  const [upNext, setUpNext] = useState();
  const [popular, setPopular] = useState();
  const [render, setRenderr] = useState(1);
  const [tvShow, setTvShow] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
   const fetchUpcomming =() => fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=38bb64131f6a09cb91a161b833a0f5e1"
    )
      .then((res) => res.json())
      .then((data) => setUpNext(data.results)).then(setIsloading(false))
      const fetchPopular = () => fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=38bb64131f6a09cb91a161b833a0f5e1"
      )
        .then((res) => res.json())
        .then((data) => setPopular(data.results)).then(setIsloading(false))
      const tvShow = () => fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=38bb64131f6a09cb91a161b833a0f5e1"
      )
        .then((res) => res.json())
        .then((data) => setTvShow(data.results)).then(setIsloading(false))

        fetchUpcomming();
        fetchPopular();
        tvShow();
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
  const handleRender = () => { 
    setRenderr(render+1)
   }
// Watch list controller
const addToWatchList = (movie) => {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
    success("Added to watchlist!");
    handleRender();
  };





  const info = {
    upNext,
    addToWatchList,
    popular,
    handleRender,
    tvShow,
    isLoading,
  };
  return (
    <GlobalContext.Provider value={info}>{children}</GlobalContext.Provider>
  );
};

export default MainContext;
