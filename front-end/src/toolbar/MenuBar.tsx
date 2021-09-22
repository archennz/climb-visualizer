import * as React from "react";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import FilterBar from "./FilterBar";
import { truncateSync } from "fs";

function MenuBar(props: any): JSX.Element {
  const [showFilter, setShowFilter] = React.useState(false);

  const handleDrawerClose = () => {
    setShowFilter(false);
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1">
            Rock Climb Visualizer
          </Typography>
          <Button color="inherit" onClick={() => setShowFilter(true)}>
            Filters
          </Button>
        </Toolbar>
      </AppBar>
      <FilterBar open={showFilter} onClose={handleDrawerClose}></FilterBar>
    </Box>
  );
}

export default MenuBar;
