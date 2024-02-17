import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

const UpComming = () => {
  const [upNext, setUpNext] = useState();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=38bb64131f6a09cb91a161b833a0f5e1"
    )
      .then((res) => res.json())
      .then((data) => setUpNext(data.results));
  }, []);
  console.log(upNext);
  return (
    <div>
      <h2 className=" text-p text-xl font-extrabold mb-10">Up Next</h2>
        {upNext?.slice(0, 3)?.map((movie) => (
          <div
            key={movie.id}
            className="card card-side h-36 my-4 rounded-none "
          >
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`}
                alt="Movie"
                className=" h-32 rounded-md hover:opacity-55"
              />
            </figure>
            <div className=" ml-5 flex flex-col gap-2 justify-center">
              <h4 className=" hover:text-red-500">{movie.title}</h4>
              <p className=" flex items-center gap-3">
                <FaStar className=" text-yellow-400" />
                {movie.vote_average.toFixed(1)} ({movie.vote_count})
              </p>
              <p className="w-40 text-xs text-sub">{movie.overview.slice(0,90)}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UpComming;
