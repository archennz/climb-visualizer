import * as React from "react";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import FilterBar from "./FilterBar";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function MenuBar(props: any): JSX.Element {
  const drawerWidth = 2400;
  const [showFilter, setShowFilter] = React.useState(false);

  const handleDrawerClose = () => {
    setShowFilter(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rock Climb Visualizer
          </Typography>
          <Button variant="outlined" color="error" size="medium" endIcon={<FilterAltIcon />} onClick={() => setShowFilter(true)}>
            Filters
          </Button>
        </Toolbar>
      </AppBar>
      <FilterBar width={drawerWidth} open={showFilter} onClose={handleDrawerClose}></FilterBar>
    </Box>
  );
}

export default MenuBar;
