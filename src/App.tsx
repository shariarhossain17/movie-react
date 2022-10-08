import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import SingleMovieCard from "./SIngleMovieCard/SingleMovieCard";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<SingleMovieCard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
