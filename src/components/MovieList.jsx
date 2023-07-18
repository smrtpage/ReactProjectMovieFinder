import MovieListItem from "./MovieListItem";

function MovieList({
  movies,
  onAddToFavorites,
  onRemoveFromFavorites,
  checkIfFavorite,
}) {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <MovieListItem
          key={movie.id}
          movie={movie}
          onAddToFavorites={onAddToFavorites}
          onRemoveFromFavorites={onRemoveFromFavorites}
          isFavorite={checkIfFavorite(movie)}
        />
      ))}
    </div>
  );
}
export default MovieList;
