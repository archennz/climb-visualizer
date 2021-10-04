import * as React from "react";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";


const MenuBar: React.FC = () => {
  const drawerWidth = 240;
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rock Climb Visualizer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
