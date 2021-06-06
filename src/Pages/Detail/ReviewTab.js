import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Box, Typography, Grid, Container, Divider } from "@material-ui/core";

export default function ReviewTab(props) {
  // let [value, setValue] = React.useState(2);

  const { username, review, date, rating, image } = props.review;

  return (
    <>
      <Container>
        <Box p={2}>
          <Grid container>
            <Grid item md={2}>
              <Box>
                <img width="75%" src={image} alt="abc" />
              </Box>
            </Grid>
            <Grid item md={8}>
              <Box>
                <Box>
                  <Typography variant="subtitle1">{username}</Typography>
                </Box>
                <Box mb={1}>
                  <Typography variant="body2" color="textSecondary">
                    Posted on {date}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1">{review}</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box>
                <Typography>
                  ({rating})
                  <Rating
                    precision={0.5}
                    name="half-rating"
                    value={rating}
                    readOnly
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider />
      </Container>
    </>
  );
}
