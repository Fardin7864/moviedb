import { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { GlobalContext } from "../../../context/MainContext";
import { BsBookmarkPlus } from "react-icons/bs";

const UpComming = () => {
  const { upNext, addToWatchList } = useContext(GlobalContext);

  //   console.log(upNext);
  return (
    <div>
      <h2 className=" text-p text-xl font-extrabold mb-5">Up Next</h2>
      <div className=" grid lg:grid-cols-1 md:grid-cols-2">
             {upNext?.slice(0, 3)?.map((movie) => (
        <div
          key={movie.id}
          className="card card-side h-36 my-4 rounded-none px-4"
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
            <p className="w-48 text-justify text-xs text-sub">
              {movie.overview.slice(0, 90)}
            </p>
          </div>
          <div className=" btn btn-ghost" onClick={() => addToWatchList(movie)}>
              <BsBookmarkPlus className=" text-xl" />
            </div>
        </div>
      ))}
      </div>
 
    </div>
  );
};

export default UpComming;
