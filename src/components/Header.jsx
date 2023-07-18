import Typewriter from "typewriter-effect";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Header() {
  const [drawer, setDrawer] = useState(false);
  return (
    <header className="Header">
      <Typewriter
        options={{
          wrapperClassName: "Type",
          strings: ["TMDB", "Your favourite movies"],
          autoStart: true,
          loop: true,
        }}
      />

      <IconButton onClick={() => setDrawer(true)}>
        <MenuIcon sx={{ fontSize: "35px" }} />
      </IconButton>
      <Drawer anchor={"right"} open={drawer} onClose={() => setDrawer(false)}>
        <ul className="nav">
          <li>
            <a target="blank" href="https://www.themoviedb.org/">
              Home
            </a>
          </li>
          <li>
            <a target="blank" href="https://www.themoviedb.org/movie">
              Movies
            </a>
          </li>
          <li>
            <a target="blank" href="https://www.themoviedb.org/tv">
              Serials
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://developer.themoviedb.org/reference/intro/getting-started"
            >
              API
            </a>
          </li>
        </ul>
      </Drawer>
    </header>
  );
}
export default Header;
