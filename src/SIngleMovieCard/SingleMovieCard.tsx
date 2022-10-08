import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieType } from "../components/MovieCard/Movie.types";

const SingleMovieCard = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<movieType>();

  console.log(movie?.title);

  useEffect(() => {
    axios
      .get(`https://movie-task.vercel.app/api/movie?movieId=${id}`)
      .then((res) => {
        setMovie(res.data.data);
      });
  }, [id]);
  console.log(id);
  return (
    <div className="md:flex gap-6 shadow-xl p-4  rounded-md mt-20">
      <figure className="w-[100%] md:w-[50%]">
        <img
          className="w-[100%] h-[250px] "
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt="Movie"
        />
      </figure>
      <div className="px-4">
        <h2 className="card-title">{movie?.title}</h2>
        <p className="font-[500] mt-4 text-[15px] text-gray-500">
          {movie?.overview}
        </p>
        <p className="font-[500] mt-4 text-[15px] text-gray-500">
          popularity: <span className="text-[15px]">{movie?.popularity}</span>
        </p>
        <p className="font-[500] text-[15px] text-gray-500">
          Release Date:{" "}
          <span className="text-[15px]">{movie?.release_date}</span>
        </p>
        <p className="font-[500] text-[15px] text-gray-500">
          Total vote: <span className="text-[15px]">{movie?.vote_count}</span>
        </p>
      </div>
    </div>
  );
};

export default SingleMovieCard;
