import { AppBar, Toolbar, Switch, FormControlLabel } from "@mui/material";
import PropTypes from "prop-types";

function ThemeBtn({ isDarkThemeActive, setIsDarkThemeActive }) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <FormControlLabel
          label="Dark theme"
          control={
            <Switch
              checked={isDarkThemeActive}
              onChange={(e, checked) => setIsDarkThemeActive(checked)}
            />
          }
        />
      </Toolbar>
    </AppBar>
  );
}

ThemeBtn.propTypes = {
  isDarkThemeActive: PropTypes.bool.isRequired,
  setIsDarkThemeActive: PropTypes.func.isRequired,
};

export default ThemeBtn;
