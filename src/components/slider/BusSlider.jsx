import React, { useState } from "react";
import { useStyles } from "./Styles";
import { Slider, Typography } from "@material-ui/core";
import { SliderMarks } from "./SliderMarks";
import CapsBusStopsList from "../caps/CapsBusStopsList";

export default function BusSlider() {
  const classes = useStyles();
  const [actualValue, setActualValue] = useState(1);

  function valueLabelFormat(value) {
    return SliderMarks.findIndex((mark) => mark.value === value) + 1;
  }

  const handleChangeValue = (event, value) => {
    setActualValue(valueLabelFormat(value));
  };

  return (
    <div className={classes.root}>
      <Typography gutterBottom>Seleccione un radio de cuadras</Typography>
      <Slider
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        step={null}
        marks={SliderMarks}
        valueLabelDisplay="auto"
        onChange={handleChangeValue}
      />
      <CapsBusStopsList radius={actualValue * 100} />
    </div>
  );
}
