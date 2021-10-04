import * as React from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

const MenuBar: React.FC = () => {
  const githubLink = "https://github.com/archennz/climb-visualizer";

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rock Climb Visualizer
        </Typography>
        <Button
          endIcon={<GitHubIcon />}
          variant="contained"
          color="secondary"
          aria-label="code"
          onClick={() => (window.location.href = githubLink)}
        >
          Source code
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
