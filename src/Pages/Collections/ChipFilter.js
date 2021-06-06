import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Chip, Box, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0),
    margin: "0",
  },
  chip: {
    margin: theme.spacing(0.75),
    color: theme.palette.primary.main,
  },
  clearAll: {
    margin: theme.spacing(0.75),
  },
}));

export function ChipFilter(props) {
  const classes = useStyles();
  const {
    selectedCategory,
    setselectedCategory,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedRating,
    setSelectedRating,
  } = props;

  if (
    selectedCategory.length +
      (selectedPriceRange.isApplied ? 1 : 0) +
      (selectedRating ? 1 : 0) ===
    0
  )
    return null;

  const onClearAll = () => {
    setselectedCategory([]);
    setSelectedPriceRange({ min: "", max: "", isApplied: false });
    setSelectedRating("");
  };

  return (
    <>
      <Container>
        <Grid container>
          <Grid item md={12}>
            <Box display="flex" justifyContent="flex-between">
              <Box p={1.5}>
                <Typography variant="subtitle1">Filter By:</Typography>
              </Box>
              <Box component="ul" className={classes.root}>
                {!!selectedCategory.length &&
                  selectedCategory.map((category) => {
                    let icon;
                    return (
                      <li key={category.key}>
                        <Chip
                          icon={icon}
                          label={category}
                          onDelete={() =>
                            setselectedCategory(
                              selectedCategory.filter((cat) => cat !== category)
                            )
                          }
                          className={classes.chip}
                        />
                      </li>
                    );
                  })}
              </Box>
              <Box component="ul" className={classes.root}>
                {selectedPriceRange.isApplied && (
                  <li>
                    <Chip
                      label={`Price: ${selectedPriceRange.min}-${selectedPriceRange.max}`}
                      onDelete={() =>
                        setSelectedPriceRange({
                          min: "",
                          max: "",
                          isApplied: false,
                        })
                      }
                      className={classes.chip}
                    />
                  </li>
                )}
              </Box>

              <Box component="ul" className={classes.root}>
                {selectedRating && (
                  <li>
                    <Chip
                      label={`Rating: ${selectedRating} ${
                        Number(selectedRating) === 5 ? "" : "& Up"
                      }`}
                      onDelete={() => setSelectedRating("")}
                      className={classes.chip}
                    />
                  </li>
                )}
                <Grid item className={classes.clearAll}>
                  <Chip
                    label="clear all"
                    onDelete={onClearAll}
                    color="secondary"
                    variant="outlined"
                  />
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
