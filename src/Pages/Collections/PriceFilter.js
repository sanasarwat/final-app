import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Slider, Typography, Paper, Box } from "@material-ui/core/";
import { priceRange } from "../../data/products";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    marginBotton: "20px",
  },
});

export default function PriceFilter(props) {
  const { selectedPriceRange, setSelectedPriceRange } = props;
  const onChangePrice = (newPriceRange) => {
    if (
      newPriceRange[0] === priceRange.min &&
      newPriceRange[1] === priceRange.max
    )
      setSelectedPriceRange({
        min: newPriceRange[0],
        max: newPriceRange[1],
        isApplied: false,
      });
    else
      setSelectedPriceRange({
        min: newPriceRange[0],
        max: newPriceRange[1],
        isApplied: true,
      });
  };
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper component={Box} p={3}>
          <Typography variant="h6" id="range-slider" gutterBottom>
            Filter By Price
          </Typography>
          <Slider
            value={[
              selectedPriceRange.min || priceRange.min,
              selectedPriceRange.max || priceRange.max,
            ]}
            min={priceRange.min}
            max={priceRange.max}
            step={(priceRange.max - priceRange.min) / 8}
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
