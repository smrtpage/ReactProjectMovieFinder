import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Tooltip,
} from "@mui/material";
import StarRating from "./StarRating";
import MovieOverview from "./MovieOverview";

function MovieListItem({
  movie,
  onAddToFavorites,
  onRemoveFromFavorites,
  isFavorite,
}) {
  const handleAddToFavorites = () => {
    onAddToFavorites(movie);
  };

  const handleRemoveFromFavorites = () => {
    onRemoveFromFavorites(movie);
  };

  return (
    <Card className="Card">
      <CardMedia
        component={"img"}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        title={movie.title}
      />
      <CardContent className="CardContent">
        <StarRating rating={movie.vote_average} />
        <Typography gutterBottom variant="h6" component="h3">
          {movie.original_title}
        </Typography>
        <MovieOverview>{movie.overview}</MovieOverview>
        <div className="btnWrapper">
          <Button
            className="viewBtn"
            href={`https://www.themoviedb.org/movie/${movie.id}`}
            target="blank"
            variant="contained"
            sx={{
              borderRadius: "0px",
            }}
          >
            View
          </Button>
          {isFavorite ? (
            <Tooltip title="Remove From Favourite">
              <Button
                className="addBtn"
                sx={{
                  fontSize: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                  color: "#000",
                  marginLeft: "5px",
                  width: "30%",
                  height: "40px",
                }}
                variant="contained"
                onClick={handleRemoveFromFavorites}
              >
                -
              </Button>
            </Tooltip>
          ) : (
            <Tooltip title="Add To Favourite">
              <Button
                sx={{
                  fontSize: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                  color: "#000",
                  marginLeft: "5px",
                  width: "30%",
                  height: "40px",
                }}
                variant="contained"
                onClick={handleAddToFavorites}
              >
                +
              </Button>
            </Tooltip>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
export default MovieListItem;
