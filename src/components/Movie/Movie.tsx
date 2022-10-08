import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import MovieCard from "../MovieCard/MovieCard";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const [totalpage, setTotalPage] = useState(null);
  const [page, setPage] = useState(1);

  const { data, isLoading, refetch } = useQuery("movie", () => {
    axios
      .get(`https://movie-task.vercel.app/api/popular?page=1`)
      .then((res) => {
        setMovies(res.data.data.results);
      });
  });
  const handleNext = () => {
    setPage(page + 1);
    axios
      .get(`https://movie-task.vercel.app/api/popular?page=${page + 1}`)
      .then((res) => {
        setMovies(res.data.data.results);
      });

    console.log(page);
  };
  const handleBack = () => {
    setPage(page - 1);
    axios
      .get(`https://movie-task.vercel.app/api/popular?page=${page}`)
      .then((res) => {
        setMovies(res.data.data.results);
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  console.log(page);

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
      {movies.length === 0 && (
        <p className="text-4xl text-center mt-[100px]">No Result Found</p>
      )}
      <div className="text-right">
        {page !== 1 ? (
          <button
            onClick={handleBack}
            className="btn btn-sm mr-6 relative top-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left mr-2"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />{" "}
            </svg>
            Previous
          </button>
        ) : (
          ""
        )}
        <button onClick={handleNext} className="btn btn-sm btn-primary">
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right ml-2"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />{" "}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Movie;
