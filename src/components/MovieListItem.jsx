import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function MovieListItem({ movie }) {
  return (
    <Card>
      <CardMedia
        component={"img"}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        title={movie.title}
      />
      <Typography gutterBottom variant="h6" component="h3">
        {movie.name}
      </Typography>
    </Card>
  );
}
export default MovieListItem;
