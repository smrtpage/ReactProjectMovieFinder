import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";
import SearchBar from "./components/SearchBar";
import { Typography } from "@mui/material";
import Header from "./components/Header";
import Button from "./components/ButtonLoadMore";
import Slider from "./components/Slider";
import Favourites from "./components/Favourites";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const apiURL1 = "https://api.themoviedb.org/3/search/movie";
const apiURL2 = "https://api.themoviedb.org/3/discover/movie";

function initFavouriteMovies() {
  const favouriteMovies = localStorage.getItem("favouriteMovies");
  if (favouriteMovies) {
    return JSON.parse(favouriteMovies);
  } else {
    return [];
  }
}

function App() {
  const [movies, setMovies] = useState([]);
  const [favouriteMovies, setFavouriteMovies] = useState(initFavouriteMovies);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  function addToFavorites(movie) {
    setFavouriteMovies((prevFavouriteMovies) => [
      ...prevFavouriteMovies,
      movie,
    ]);
  }

  function removeFromFavorites(movie) {
    setFavouriteMovies((prevFavouriteMovies) =>
      prevFavouriteMovies.filter((m) => m.id !== movie.id)
    );
  }

  function checkIfFavorite(movie) {
    return favouriteMovies.some((m) => m.id === movie.id);
  }

  useEffect(() => {
    localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
  }, [favouriteMovies]);

  useEffect(() => {
    setLoading(true);
    if (query === "") {
      axios
        .get(apiURL2, {
          params: {
            sort_by: "popularity.desc",
            language: "en-US",
            query,
            page,
          },
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWU1MzU4MmVmZjljMmU2NWZhMWQ1NTZmODE1ZjMyNiIsInN1YiI6IjY0OWIxNTBlMjk3NWNhMDBlN2U0YmUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2CD354QOaA5y7V3o5cVPBi_mUcGccfVFBoY-Cvc6a8o`,
          },
        })
        .then((res) => {
          setMovies((prevMovies) => [...prevMovies, ...res.data.results]);
          setPagesCount(Math.ceil(res.data.total_pages / 19));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
      return;
    }
    axios
      .get(apiURL1, {
        params: {
          page,
          query,
        },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWU1MzU4MmVmZjljMmU2NWZhMWQ1NTZmODE1ZjMyNiIsInN1YiI6IjY0OWIxNTBlMjk3NWNhMDBlN2U0YmUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2CD354QOaA5y7V3o5cVPBi_mUcGccfVFBoY-Cvc6a8o`,
        },
      })
      .then((res) => {
        setMovies((prevMovies) => [...prevMovies, ...res.data.results]);
        setPagesCount(Math.ceil(res.data.total_pages / 19));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  function search(newQuery) {
    setQuery(newQuery);
    setPage(1);
    setMovies([]);
  }

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  useEffect(() => {
    if (page === 1) {
      return;
    }
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [movies, page]);

  return (
    <div>
      {loading && <Loader />}
      <Header />
      <Slider />
      <SearchBar onSearch={search} />
      <Favourites
        favouriteMovies={favouriteMovies}
        onRemoveFromFavorites={removeFromFavorites}
        checkIfFavorite={checkIfFavorite}
      />
      {query === "" ? (
        <Typography
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={"40px"}
          gutterBottom
          variant="h4"
          component="h3"
        >
          Trending Movies
        </Typography>
      ) : (
        <Typography
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={"40px"}
          gutterBottom
          variant="h4"
          component="h3"
        >
          Search Results For {query}
        </Typography>
      )}
      <MovieList
        onRemoveFromFavorites={removeFromFavorites}
        movies={movies}
        onAddToFavorites={addToFavorites}
        checkIfFavorite={checkIfFavorite}
      />
      {page < pagesCount && <Button onClick={loadMore} />}
    </div>
  );
}

export default App;
