import React from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@material-ui/core";
import { useStyles } from "./Styles";

export default function RadioButtonList({ title, items, selectedItem, setSelectedItem }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <Typography className={classes.formLabel}>{title}</Typography>
        <RadioGroup value={selectedItem} onChange={handleChange}>
          {(items || []).map((item, value) => (
            <FormControlLabel key={value} value={item} control={<Radio color="primary" />} label={item} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
