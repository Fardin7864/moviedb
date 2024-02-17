import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";


const FromWatchList = () => {
    const [movies, setMovies] = useState();
    useEffect(() => { 
        const moviesFromStorage =  JSON.parse(localStorage.getItem('movies'));
        setMovies(moviesFromStorage)
     },[])
     console.log(movies)
  return (
    <div className=" px-3 my-10">
      <div className=" flex items-center gap-5">
        <div className=" h-10 w-1 bg-[#ad241b] rounded-sm"></div>
        <h3 className=" text-3xl font-bold text-[#F5C518]">Suggation From Your Watch List</h3>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {movies?.map((movie) => (
          <div key={movie.id+1} className="card card-compact shadow-xl">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`}
                alt="Movie"
                className="w-full hover:opacity-55 active:opacity-25"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {movie.title}
              </h2>
              <p className=" flex items-center gap-3">
                <FaStar className=" text-yellow-400" />
                {movie.vote_average.toFixed(1)} ({movie.vote_count})
              </p>
              <p className="text-justify text-xs text-sub">
                {movie.overview.slice(0, 150)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FromWatchList;
