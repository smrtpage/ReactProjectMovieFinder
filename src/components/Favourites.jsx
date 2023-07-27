import { Typography } from "@mui/material";
import MovieList from "./MovieList";

function Favourites({
  favouriteMovies,
  onRemoveFromFavorites,
  checkIfFavorite,
}) {
  return (
    <div className="FavouritesWrapper">
      <Typography
        gutterBottom
        variant="h4"
        component="h3"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        marginTop={"40px"}
      >
        My Favourites
      </Typography>
      {favouriteMovies.length === 0 ? (
        <Typography
          variant="h4"
          gutterBottom
          component="h3"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"100px 20px"}
          textAlign={"center"}
          color={"gray"}
        >
          You Have No Favourite Movies
        </Typography>
      ) : (
        <MovieList
          movies={favouriteMovies}
          onRemoveFromFavorites={onRemoveFromFavorites}
          checkIfFavorite={checkIfFavorite}
        />
      )}
    </div>
  );
}

export default Favourites;
