import { Rating } from "@mui/material";

function StarRating({ rating }) {
  return <Rating value={rating / 2} precision={0.5} readOnly />;
}

export default StarRating;
