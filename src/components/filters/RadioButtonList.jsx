import React from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import "./Styles.css";

export default function RadioButtonList({ title, items, selectedItem, setSelectedItem }) {
  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div className="formControllContainer">
      <FormControl>
        <label className="formLabel">{title}</label>
        <RadioGroup value={selectedItem} onChange={handleChange}>
          {(items || []).map((item, value) => (
            <FormControlLabel key={value} value={item} control={<Radio color="primary" />} label={item} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
