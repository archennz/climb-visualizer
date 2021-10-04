import * as React from "react";
import Box from "@mui/material/Box";
import Map from "./map/Map";
import MenuBar from "./toolbar/MenuBar";
import RouteInfo from "./models/routeInfo";
import FilterBar from "./toolbar/FilterBar";
import { Toolbar } from "@mui/material";
import HelpText from "./components/HelpText";

export interface FilterProps {
  maxGrade: number;
  minGrade: number;
  includePG: boolean;
  includeX: boolean;
  includeR: boolean;
}

export default function App() {
  const drawerWidth = 180;

  const [routes, setRoutes] = React.useState<RouteInfo[]>([]);
  const [routesDisplayed, setRoutesDisplayed] = React.useState<RouteInfo[]>([]);
  const [filterBy, setFilterBy] = React.useState<FilterProps>({
    maxGrade: 14,
    minGrade: 1,
    includePG: true,
    includeX: true,
    includeR: true,
  });

  // to fetch climbing data
  React.useEffect(() => {
    async function getData() {
      const response = await fetch("api/data");
      const data = await response.json();
      const routes = data.map((routeJson: any) => new RouteInfo(routeJson));
      setRoutes(routes);
    }
    getData();
  }, []);

  // to filter climbing data
  React.useEffect(() => {
    const filterByGradeAndRating = (route: RouteInfo) => {
      const byGrade =
        route.grade < filterBy.maxGrade && route.grade > filterBy.minGrade;
      const isS = route.safety == "S";
      const isPG = route.safety == "PG13" && filterBy.includePG;
      const isX = route.safety == "X" && filterBy.includeX;
      const isR = route.safety == "R" && filterBy.includeR;
      return byGrade && (isS || isPG || isX || isR);
    };

    const filteredRoutes = routes.filter((route) =>
      filterByGradeAndRating(route)
    );
    setRoutesDisplayed(filteredRoutes);
  }, [filterBy, routes]);

  return (
    <div>
      <HelpText></HelpText>
      <Box sx={{ display: "flex" }}>
        <MenuBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Map routes={routesDisplayed}></Map>
        </Box>
        <FilterBar
          filterHandler={setFilterBy}
          drawerWidth={drawerWidth}
        ></FilterBar>
      </Box>
    </div>
  );
}
