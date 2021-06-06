import React from "react";

import {
  Grid,
  Container,
  Box,
  Divider,
  Typography,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function WishlistItems(props) {
  const { title, image, units, price } = props.product;
  let { removeFromWish } = props;
  console.log(title);

  return (
    <>
      <Container>
        <Box p={2}>
          <Grid container>
            <Grid item md={2}>
              <Box>
                <img width="50%" src={image} alt="abc" />
              </Box>
            </Grid>
            <Grid item md={8}>
              <Box>
                <Box>
                  <Typography variant="subtitle1">{title}</Typography>
                </Box>
                <Box mb={1}>
                  <Typography variant="body2" color="textSecondary">
                    {units} | pc(s)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1">Rs. {price}</Typography>
                </Box>
                <Box mt={2}>
                  <Button color="primary" variant="outlined">
                    Cart
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  onClick={() => removeFromWish(props.product)}
                  startIcon={<CloseIcon />}
                  color="secondary"
                ></Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider />
      </Container>
    </>
  );
}
