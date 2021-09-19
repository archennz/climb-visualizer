import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import { AppBar, Toolbar } from "@mui/material";
import Map from "./Map";

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
  const [routes, setRoutes] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/data");
      const data = await response.json();
      setRoutes(data);
    }
    console.log("yo");
    getData();
  }, []);

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" align="center" component="h1">
            Rock Climb Visualizer
          </Typography>
        </Toolbar>
      </AppBar>
      <Map routes={routes}></Map>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App v5-beta example with TypeScript
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}
