import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/MainContext';
import { FaStar } from 'react-icons/fa6';

const SearchReasult = () => {
    const {string} = useParams();
    const [movies, setMovies] = useState();
    const {upNext, popular} = useContext(GlobalContext);

    useEffect(() => { 
        setMovies([...upNext, ...popular])
     },[upNext, popular])

    //  console.log(movies)

    // console.log(string)

      // Function to filter movies based on search input
  const filterMovies = () => {
    return movies?.filter(movie =>
      movie.title.toLowerCase().includes(string.toLowerCase())
    );
  }
//   console.log(filterMovies)
    return (
        <div>
             {filterMovies(movies)?.map(movie => (
              <div key={movie.title+1}>
              <div className=" flex items-center gap-5">
                <div className=" h-10 w-1 bg-[#ad241b] rounded-sm"></div>
                <h3 className=" text-3xl font-bold text-[#F5C518]">
                  {movie?.original_title}
                </h3>
              </div>
              <p className=" flex items-center gap-3 pl-6 my-5">
                <FaStar className=" text-yellow-400" />
                {movie?.vote_average?.toFixed(1)} ({movie?.vote_count})
              </p>
              <div className=" flex lg:flex-row flex-col items-center gap-8">
                   <img 
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`} 
                alt="Movie" 
                />
                <div className=" flex flex-col gap-4 px-5 lg:px-0">
                    <h4 className=" text-2xl"><span className=" font-bold">TagLine :</span> {movie?.tagline}</h4>
                    <p><span className=" font-bold">Overview :</span> {movie?.overview}</p>
                    <p><span className=" font-bold">Status :</span> {movie?.status}</p>
                    <p><span className=" font-bold">Release Date :</span> {movie?.release_date}</p>
                    <p><span className=" font-bold">Box Office :</span> $ {movie?.revenue}</p>
                </div>
              </div>
             
            </div>
        ))}
        </div>
    );
};

export default SearchReasult;