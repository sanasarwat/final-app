import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Slider, Typography, Paper, Box } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    marginBotton: "20px",
  },
});

export default function PriceFilter(props) {
  const { min, max, selectedPriceRange, onChangePrice } = props;
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper component={Box} p={3}>
          <Typography variant="h6" id="range-slider" gutterBottom>
            Filter By Price
          </Typography>
          <Slider
            value={[selectedPriceRange.min, selectedPriceRange.max]}
            min={min}
            max={max}
            step={(max - min) / 8}
            onChange={(event, newPriceRange) => onChangePrice(newPriceRange)}
            onChangeCommitted={(event, newPriceRange) =>
              onChangePrice(newPriceRange)
            }
          />
        </Paper>
      </div>
    </>
  );
}
