import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=38bb64131f6a09cb91a161b833a0f5e1`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();

    return () => {
      // Cleanup if needed
    };
  }, [id]);

  if (!movie) {
    return <div className="flex flex-col gap-4 w-52 px-5">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>;
  }

  console.log(movie);
  return (
    <div>
      <div className=" flex items-center gap-5">
        <div className=" h-10 w-1 bg-[#ad241b] rounded-sm"></div>
        <h3 className=" text-3xl font-bold text-[#F5C518]">
          {movie?.original_title}
        </h3>
      </div>
      <p className=" flex items-center gap-3 pl-6 my-5">
        <FaStar className=" text-yellow-400" />
        {movie.vote_average.toFixed(1)} ({movie.vote_count})
      </p>
      <div className=" flex lg:flex-row flex-col items-center gap-8">
           <img 
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`} 
        alt="Movie" 
        />
        <div className=" flex flex-col gap-4 px-5 lg:px-0">
            <h4 className=" text-2xl"><span className=" font-bold">TagLine :</span> {movie.tagline}</h4>
            <p><span className=" font-bold">Overview :</span> {movie.overview}</p>
            <p><span className=" font-bold">Status :</span> {movie.status}</p>
            <p><span className=" font-bold">Release Date :</span> {movie.release_date}</p>
            <p><span className=" font-bold">Box Office :</span> $ {movie.revenue}</p>
        </div>
      </div>
     
    </div>
  );
};

export default Details;
