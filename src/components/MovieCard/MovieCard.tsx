import { movieType } from "./Movie.types";

type Props = {
  movie: movieType;
};

const MovieCard = ({ movie }: Props) => {
  const {
    id,
    popularity,
    title,
    backdrop_path,
    poster_path,
    vote_count,
    release_date,
  } = movie;

  return (
    <div>
      <div className="card card-compact max-w-sm mt-10 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-[300px]"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-[500] ">{title}</h2>
          <p className="font-[500] text-[18px] text-gray-500">
            popularity: <span className="text-[15px]">{popularity}</span>
          </p>
          <p className="font-[500] text-[18px] text-gray-500">
            Release date: <span className="text-[15px]">{release_date}</span>
          </p>
          <p className="font-[500] text-[18px] text-gray-500">
            Total vote: <span className="text-[15px]">{vote_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
