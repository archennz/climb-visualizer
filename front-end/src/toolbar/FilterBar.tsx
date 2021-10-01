import { CompareOutlined } from "@mui/icons-material";
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
  const [isPG, setIsPG] = React.useState<boolean>(false);
  const [isX, setIsX] = React.useState<boolean>(false);
  const [isR, setIsR] = React.useState<boolean>(false);

 // work out types for this  
  const handleGradeChange = (event: any, newValue: any) => {
    setGradeRange(newValue);
  };


  const gradeCommitHandler = (event: any, newValue: any) => {
    console.log(newValue)
  }
  const isPGHandler = () => {
    console.log('changed')
    setIsPG(prev => !prev) 
  }

  const isXHandler = () => {
    setIsX(prev => !prev)
  }

  const isRHandler = (event: React.SyntheticEvent) => {
    setIsR(prev => !prev)
  }

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
            onChangeCommitted={gradeCommitHandler}
            orientation="vertical"
            disableSwap
          ></Slider>
        </Box>
        <Divider/>
        <Box>
        <Typography variant="h6">Rating:</Typography>
        </Box>
      <FormControlLabel control={<Checkbox />} value={isPG} label="PG13" onChange={isPGHandler}></FormControlLabel>
      <FormControlLabel control={<Checkbox />} value={isX} label="X" onChange={isXHandler}></FormControlLabel>
      <FormControlLabel control={<Checkbox />} value={isR} label="R" onChange={isRHandler}></FormControlLabel>
      </Stack>
      </Container>
    </Drawer>
  );
}

export default FilterBar;
