import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/MainContext";
import { BsBookmarkPlus } from "react-icons/bs";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa6";

const TvShow = () => {
    const { tvShow, addToWatchList } = useContext(GlobalContext);
    const [seeMore, setSeeMore] = useState(false);
      console.log(tvShow);
    const movies = !seeMore ? tvShow?.slice(0, 8) : tvShow;

  return (
    <div className=" px-3">
      <div>
        <h3 className=" text-4xl font-bold text-[#F5C518]">More Explore</h3>
        <div className=" flex items-center gap-5">
        <div className=" h-8 w-1 bg-[#ad241b] rounded-sm my-8"></div>
        <h3 className=" text-3xl font-bold text-title">Tv Shows</h3>
      </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {movies?.map((movie) => (
          <div key={movie?.id} className="card card-compact shadow-xl">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`}
                alt="Movie"
                className="w-full hover:opacity-55 active:opacity-25"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {movie?.name}{" "}
                <button
                  onClick={() => addToWatchList(movie)}
                  className=" text-xl btn-ghost"
                >
                  <BsBookmarkPlus className=" hover:text-red-500" />
                </button>
              </h2>
              <p className=" flex items-center gap-3">
                <FaStar className=" text-yellow-400" />
                {movie?.vote_average?.toFixed(1)} ({movie.vote_count})
              </p>
              <p className="text-justify text-xs text-sub">
                {movie?.overview?.slice(0, 150)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-center">
        <button className=" btn btn-ghost" onClick={() => setSeeMore(!seeMore)}>
          {seeMore ? (
            <>
              <FaChevronUp /> See Less
            </>
          ) : (
            <>
              <FaChevronDown /> See More
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TvShow;
