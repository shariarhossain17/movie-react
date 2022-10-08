import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import MovieCard from "../MovieCard/MovieCard";

const Movie = () => {
  const [movies, setMovies] = useState([]);

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    axios
      .get(`https://movie-task.vercel.app/api/search?page=1&query=${search}`)
      .then((res) => {
        setMovies(res.data.data.results);
      });
  };

  return (
    <div className="">
      <div className="mx-auto text-center mt-10">
        <input
          type="text"
          placeholder="Search Movie"
          className="input input-bordered w-full max-w-xs mx-auto"
          onChange={(event) => handleSearch(event)}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {movies
          ? movies.map((movie) => <MovieCard movie={movie}></MovieCard>)
          : "no result found"}
      </div>
    </div>
  );
};

export default Movie;
