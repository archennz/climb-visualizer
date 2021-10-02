import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Map from "./map/Map";
import MenuBar from "./toolbar/MenuBar";
import RouteInfo from "./models/routeInfo";
import FilterBar from "./toolbar/FilterBar";
import { Toolbar } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export interface FilterProps {
  maxGrade: number;
  minGrade: number;
  isPG: boolean;
  isX: boolean;
  isR: boolean;
}

export default function App() {
  const drawerWidth = 100;
  const [routes, setRoutes] = React.useState<RouteInfo[]>([]);
  const [routesDislayed, setRoutesDisplayed] = React.useState<RouteInfo[]>([]);
  // initialize app grabbing data from endpoint
  // TODO: change hardcoded endpoint
  React.useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/data");
      const data = await response.json();
      const routes = data.map((routeJson: any) => new RouteInfo(routeJson));
      setRoutes(routes);
    }
    getData();
  }, []);

  // now need to pop the states up from filterbar
  // and use it to do the filter stuff
  const [filterBy, setFilterBy] = React.useState<FilterProps>({
    maxGrade: 14,
    minGrade: 1,
    isPG: false,
    isX: false,
    isR: false,
  });

  React.useEffect(() => {
    console.log(filterBy)
    const filteredRoutes = routes.filter(routes => (routes.grade < filterBy.maxGrade && routes.grade> filterBy.minGrade))
    setRoutesDisplayed(filteredRoutes)
  }, [filterBy]);

  return (
    <Box sx={{ display: "flex" }}>
      <MenuBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Map routes={routesDislayed}></Map>
      </Box>
      <FilterBar filterHandler={setFilterBy} drawerWidth={240}></FilterBar>
      {/* <Container maxWidth="sm">
        <Box sx={{ my: 1 }}>
          <Copyright />
        </Box>
      </Container> */}
    </Box>
  );
}
