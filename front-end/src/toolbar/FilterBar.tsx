import {
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  Slider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

function FilterBar(props: any): JSX.Element {
  const [gradeRange, setGradeRange] = React.useState([0, 10]);

  const handleGradeChange = (event: any, newValue: any) => {
    console.log(newValue);
    setGradeRange(newValue);
  };

  const marksMin = 0;
  const marksMax = 10;
  // TODO: dynamically generate markers
  const marks = [
    {
      value: 0,
      label: "5.0",
    },
    {
      value: 5,
      label: "5.5",
    },
  ];
  const onClose = props.onClose;
  return (
    <Box>
      <Drawer anchor="right" open={props.open}>
        <Button onClick={onClose}>Close me!</Button>
        <Slider
          min={marksMin}
          max={marksMax}
          step={1}
          marks={marks}
          value={gradeRange}
          onChange={handleGradeChange}
          orientation="vertical"
          disableSwap
        ></Slider>
        <Typography>Rating:</Typography>
        <FormControlLabel
          control={<Checkbox />}
          label="PG13"
        ></FormControlLabel>
        <FormControlLabel control={<Checkbox />} label="X"></FormControlLabel>
        <FormControlLabel control={<Checkbox />} label="R"></FormControlLabel>
      </Drawer>
    </Box>
  );
}

export default FilterBar;
