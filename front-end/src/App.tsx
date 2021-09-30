import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Map from "./map/Map";
import MenuBar from "./toolbar/MenuBar";
import RouteInfo from "./models/routeInfo";

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

export default function App() {
  // TODO: this must have types
  const [routes, setRoutes] = React.useState<RouteInfo[]>([]);

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

  return (
    <React.Fragment>
      <MenuBar></MenuBar>
      <Map routes={routes}></Map>
      <Container maxWidth="sm">
        <Box sx={{ my: 1 }}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}
