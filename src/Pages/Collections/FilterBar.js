import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  filterBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40px",
  },
  clearAll: {
    textDecoration: "none",
    color: "black",
  },
});

export function FilterBar(props) {
  const classes = useStyles();
  const { setselectedCategory, setSelectedPriceRange, setSelectedRating } =
    props;

  // if (
  //   selectedCategory.length +
  //     (selectedPriceRange.isApplied ? 1 : 0) +
  //     (selectedRating ? 1 : 0) ===
  //   0
  // )
  //   return null;

  const onClearAll = () => {
    setselectedCategory([]);
    setSelectedPriceRange({ min: "", max: "", isApplied: false });
    setSelectedRating("");
  };

  //const [clearAll, setClearAll] = useState("");
  return (
    <>
      <Paper
        component={Box}
        p={2}
        m={1}
        elevation={1}
        square
        className={classes.filterBar}
      >
        <Box>
          <Typography variant="h6">Filter</Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            <Link className={classes.clearAll} onClick={onClearAll}>
              {" "}
              Clear All
            </Link>
          </Typography>
        </Box>
      </Paper>
    </>
  );
}
