import React from "react";
import { useStyles } from "./Styles";

const TourSelector = () => {
  const classes = useStyles();
  return <div className={classes.root} data-tut="reactour__marker" />;
};

export default TourSelector;
