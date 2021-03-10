import React, { useState } from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Styles.css";

export default function CheckBoxList({ title, items, selectedItems, setSelectedItems, handleUpdateList }) {
  const [itemsToShow, setItemsToShow] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event) => {
    handleUpdateList(selectedItems, setSelectedItems, event.target.name);
  };

  const handleShowMoreOrLess = () => {
    if (isExpanded) {
      setItemsToShow(5);
      setIsExpanded(false);
    } else {
      setItemsToShow(items.length);
      setIsExpanded(true);
    }
  };

  return (
    <div className="formControllContainer">
      <FormControl>
        <label className="formLabel">{title}</label>
        <FormGroup>
          {(items ? items.slice(0, itemsToShow) : []).map((item, value) => (
            <FormControlLabel
              key={value}
              control={
                <Checkbox
                  checked={selectedItems.includes(item)}
                  onChange={handleChange}
                  name={item}
                  color="primary"
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
        {(items ? items.length : 0) > 5 ? (
          <span className="btn btn-primary" onClick={handleShowMoreOrLess}>
            {isExpanded ? (
              <Grid container alignItems="center">
                <label className="moreOrLessLabel">Ver menos</label>
                <ExpandLessIcon className="moreOrLessIcon" />
              </Grid>
            ) : (
              <Grid container alignItems="center">
                <label className="moreOrLessLabel">Ver más</label>
                <ExpandMoreIcon className="moreOrLessIcon" />
              </Grid>
            )}
          </span>
        ) : null}
      </FormControl>
    </div>
  );
}
