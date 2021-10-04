import { Backdrop, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";


const HelpText = () => {
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Backdrop open={open} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Box sx={{width: 350, height: 350}}>
      <Typography paragraph={true}> Use the slider to select the grades you want to climb and filter for protection ratings (R-rated etc.).
      </Typography> 
      <Typography paragraph={true}>
        The heatmap will then tell you where the best crags are. 
        </Typography>
      <Typography paragraph={true}>
        Hover over the map to get more information on individual climbs.</Typography>
      <Box sx={{textAlign: "center"}}>
      <Button onClick={handleClose} color="secondary" variant="contained" size="large">Sounds Good!</Button>
      </Box>
      </Box>
    </Backdrop>
  )
}

export default HelpText;