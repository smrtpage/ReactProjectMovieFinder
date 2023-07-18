import { Typography } from "@mui/material";

function MovieOverview({ children }) {
  return (
    <Typography variant="body2" color="text.secondary">
      {children.slice(0, 90) + "..."}
    </Typography>
  );
}

export default MovieOverview;
