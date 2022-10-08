import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Fotter from "./shared/Fotter";
import SingleMovieCard from "./SIngleMovieCard/SingleMovieCard";

function App() {
  return (
    <div>
      <div className="px-12 mb-6">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<SingleMovieCard />}></Route>
        </Routes>
      </div>
      <Fotter />
    </div>
  );
}

export default App;
