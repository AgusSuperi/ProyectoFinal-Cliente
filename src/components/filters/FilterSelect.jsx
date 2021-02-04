import React from "react";
import { useStyles, MenuProps } from "./Styles";
import {
  Checkbox,
  Chip,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@material-ui/core";

const FilterSelect = ({ items, title, selectedItems, setSelectedItems }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setSelectedItems(event.target.value);
  };

  return (
    <FormControl className={classes.formControlMobile}>
      <InputLabel>{title}</InputLabel>
      <Select
        multiple
        value={selectedItems}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={classes.chip} size="small" />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {(items || []).map((item, value) => (
          <MenuItem key={value} value={item}>
            <Checkbox checked={selectedItems.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
