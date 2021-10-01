import {
  Button,
  Checkbox,
  Container,
  Divider,
  Drawer,
  FormControlLabel,
  Slider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";


const FilterBar: React.FC<{drawerWidth : number}> = (props) => {
  const [gradeRange, setGradeRange] = React.useState<number[]>([3, 11]);

 // work out types for this  
  const handleGradeChange = (event: any, newValue: any) => {
    console.log(newValue);
    setGradeRange(newValue);
  };

  const marksMin = 0;
  const marksMax = 15;
  const marksList = Array.from({length: marksMax + 1}).map((_, index) => {
    const num = index + marksMin
    return {
    value: num,
    label: '5.'+num.toString()
  }})

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: props.drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: props.drawerWidth, boxSizing: 'border-box' },
      }}
      anchor="right"
    >
      <Container>
      <Toolbar/>
      <Divider/>
      <Stack direction="column"  sx={{ overflow: 'auto', display: 'flex' }}>
        <Box sx={{ height:"70vh", p:2, width:"2"}}>
          <Slider
            min={marksMin}
            max={marksMax}
            step={1}
            marks={marksList}
            value={gradeRange}
            onChange={handleGradeChange}
            orientation="vertical"
            disableSwap
          ></Slider>
        </Box>
        <Divider/>
        <Box>
        <Typography variant="h6">Rating:</Typography>
        </Box>
      <FormControlLabel control={<Checkbox />} label="PG13"></FormControlLabel>
      <FormControlLabel control={<Checkbox />} label="X"></FormControlLabel>
      <FormControlLabel control={<Checkbox />} label="R"></FormControlLabel>
      </Stack>
      </Container>
    </Drawer>
  );
}

export default FilterBar;
