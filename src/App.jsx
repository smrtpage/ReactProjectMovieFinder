import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MovieList from "./components/MovieList";

const apiURL = "https://api.themoviedb.org/3/discover/movie";

function App() {
  const [movies, setMovies] = useState([]);

  axios
    .get(apiURL, {
      params: { page: 1, sort_by: "popularity.desc", language: "en-US" },
    })
    .then((res) => setMovies(res.data));

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
export default App;
