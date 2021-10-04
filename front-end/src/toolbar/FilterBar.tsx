import { CompareOutlined, Preview } from "@mui/icons-material";
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
import { FilterProps } from "../App";

export interface FilterBarProps {
  drawerWidth: number;
  filterHandler: React.Dispatch<React.SetStateAction<FilterProps>>;
}

const FilterBar: React.FC<FilterBarProps> = (props) => {
  const [gradeRange, setGradeRange] = React.useState<number[]>([3, 11]);
  const [isPG, setIsPG] = React.useState<boolean>(true);
  const [isX, setIsX] = React.useState<boolean>(true);
  const [isR, setIsR] = React.useState<boolean>(true);

  // work out types for this
  const handleGradeChange = (event: any, newValue: any) => {
    setGradeRange(newValue);
  };

  const gradeCommitHandler = (event: any, newValue: any) => {
    console.log(newValue);
    const [minGrade, maxGrade] = newValue;
    props.filterHandler((prevFilter) => ({
      ...prevFilter,
      minGrade: minGrade,
      maxGrade: maxGrade,
    }));
  };

  // TODO: fix type on this
  const isPGHandler = (event: any) => {
    setIsPG((prev) => !prev);
    props.filterHandler((prevFilter) => ({
      ...prevFilter,
      includePG: event.target.checked,
    }));
  };

  // TODO: fix type on this
  const isXHandler = (event: any) => {
    setIsX((prev) => !prev);
    props.filterHandler((prevFilter) => ({
      ...prevFilter,
      includeX: event.target.checked,
    }));
  };

  // TODO: fix type on this
  const isRHandler = (event: any) => {
    setIsR((prev) => !prev);
    props.filterHandler((prevFilter) => ({
      ...prevFilter,
      includeR: event.target.checked,
    }));
  };

  const marksMin = 1;
  const marksMax = 14;
  const marksList = Array.from({ length: marksMax }).map((_, index) => {
    const num = index + marksMin;
    return {
      value: num,
      label: "5." + num.toString(),
    };
  });

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: props.drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: props.drawerWidth,
          boxSizing: "border-box",
        },
      }}
      anchor="right"
    >
      <Container>
        <Toolbar />
        <Divider />
        <Stack direction="column" sx={{ overflow: "auto", display: "flex" }}>
          <Box>
            <Typography variant="h6">Grades:</Typography>
          </Box>
          <Box sx={{ height: "70vh", p: 2, width: "2" }}>
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
          <Divider />
          <Box>
            <Typography variant="h6">Rating:</Typography>
          </Box>
          <FormControlLabel
            control={<Checkbox />}
            checked={isPG}
            label="PG13"
            onChange={isPGHandler}
          ></FormControlLabel>
          <FormControlLabel
            control={<Checkbox />}
            checked={isX}
            label="X"
            onChange={isXHandler}
          ></FormControlLabel>
          <FormControlLabel
            control={<Checkbox />}
            checked={isR}
            label="R"
            onChange={isRHandler}
          ></FormControlLabel>
        </Stack>
      </Container>
    </Drawer>
  );
};

export default FilterBar;
