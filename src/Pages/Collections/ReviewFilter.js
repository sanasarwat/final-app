import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Box, Grid } from "@material-ui/core/";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    marginBotton: "20px",
  },
});

export default function ReviewFilter(props) {
  const { selectedRating, setSelectedRating } = props;
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper component={Box} p={3}>
          <Typography variant="h6" id="range-slider" gutterBottom>
            Filter By Reviews
          </Typography>
          <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
              {/* <Typography component="legend">5</Typography> */}
              {[5, 4, 3, 2, 1].map((rating) => (
                <Grid
                  container
                  key={rating}
                  onClick={() => setSelectedRating(rating)}
                >
                  <Grid item md={6} xs={12} sm={12}>
                    <Box display="flex" justifyContent="center">
                      <Rating
                        name="read-only"
                        value={rating}
                        readOnly
                        style={{
                          color: rating === selectedRating ? "#ff3d47" : "",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Box my={1.5}>
                    <Typography>
                      {rating === 5 ? 5.0 : rating.toFixed(1) + " +"}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Box>
          </div>
        </Paper>
      </div>
    </>
  );
}
