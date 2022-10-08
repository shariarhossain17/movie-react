import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import MovieCard from "../MovieCard/MovieCard";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState({
    id: "",
  });
  const { data, isLoading, refetch } = useQuery("movie", () => {
    axios
      .get("https://movie-task.vercel.app/api/popular?page=1")
      .then((res) => {
        setMovies(res.data.data.results);
      });
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {movies.map((movie) => (
          <MovieCard movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default Movie;
