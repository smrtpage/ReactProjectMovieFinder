import Typewriter from "typewriter-effect";
import { Drawer, IconButton, Button, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ThemeBtn from "./ThemeBtn";

function Header({ isDarkThemeActive, setIsDarkThemeActive }) {
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
            <Button
              component="a"
              target="blank"
              href="https://www.themoviedb.org/"
            >
              Home
            </Button>
          </li>
          <li>
            <Button target="blank" href="https://www.themoviedb.org/movie">
              Movies
            </Button>
          </li>
          <li>
            <Button target="blank" href="https://www.themoviedb.org/tv">
              Serials
            </Button>
          </li>
          <li>
            <Button
              target="blank"
              href="https://developer.themoviedb.org/reference/intro/getting-started"
            >
              API
            </Button>
          </li>
        </ul>
        <ThemeBtn
          isDarkThemeActive={isDarkThemeActive}
          setIsDarkThemeActive={setIsDarkThemeActive}
        />
      </Drawer>
    </header>
  );
}
export default Header;
