import React from "react";
import { reviews } from "../../data/review";
import ReviewTab from "./ReviewTab";
import ReviewForm from "./ReviewForm";
import { Grid, Paper, Box, Typography } from "@material-ui/core";

export function ReviewListing(props) {
  return (
    <>
      <Grid container>
        {reviews.map((review) => (
          <Grid key={review.id} item lg={12} md={12} sm={12} xs={12}>
            <Paper component={Box} p={2} square>
              <ReviewTab review={review} />
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="flex-start" mt={3}>
        <Typography variant="h5">Wite Your Opinion and Rate Us</Typography>
      </Box>
      <Box mt={2}>
        <Paper component={Box} p={2}>
          <Box p={3}>
            <ReviewForm />
          </Box>
        </Paper>
      </Box>
    </>
  );
}
