import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { AppBar, Toolbar } from '@mui/material';
import Map from './Map';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <React.Fragment>
    <AppBar position="fixed">
      <Toolbar>This is my climbing App</Toolbar>
    </AppBar>
    <Map></Map>
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
