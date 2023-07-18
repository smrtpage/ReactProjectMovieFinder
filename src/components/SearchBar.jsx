import { TextField, Button } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSearch(query);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="SearchForm">
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search Movies..."
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            width: "450px",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            height: "57px",
            backgroundColor: "#037ffc",
          }}
        >
          <SearchIcon sx={{ fontSize: "35px", color: "#fff" }} />
        </Button>
      </form>
    </div>
  );
}
export default SearchBar;
