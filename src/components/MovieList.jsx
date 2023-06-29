import MovieListItem from "./MovieListItem";

function MovieList({ movies }) {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
export default MovieList;
