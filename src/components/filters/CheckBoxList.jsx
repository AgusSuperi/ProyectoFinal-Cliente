import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./Styles";

export default function CheckboxesGroup({ title, items, selectedItems, setSelectedItems, handleUpdateList }) {
  const classes = useStyles();
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
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <Typography className={classes.formLabel}>{title}</Typography>
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
                <Typography variant="subtitle1" className={classes.showMoreOrLessText}>
                  Ver menos
                </Typography>
                <ExpandLessIcon className={classes.showMoreOrLessIcon} />
              </Grid>
            ) : (
              <Grid container alignItems="center">
                <Typography variant="subtitle1" className={classes.showMoreOrLessText}>
                  Ver más
                </Typography>
                <ExpandMoreIcon className={classes.showMoreOrLessIcon} />
              </Grid>
            )}
          </span>
        ) : null}
      </FormControl>
    </div>
  );
}
