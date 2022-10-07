import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const { data, isLoading, refetch } = useQuery("movie", () => {
    axios
      .get("https://movie-task.vercel.app/api/popular?page=1")
      .then((res) => {
        setMovies(res.data.data.results);
      });
  });
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Movie;
