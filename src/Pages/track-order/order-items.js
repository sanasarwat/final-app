import React from "react";
import { Grid, Box, Typography, Divider } from "@material-ui/core";

export default function OrderItems(props) {
  const { title, image, price, units } = props.product;
  return (
    <div>
      <Box p={3} mt={1}>
        <Grid container>
          <Grid item md={4} sm={4} xs={4}>
            <Box
              mt={1}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <img width="80px" height="60px" src={image} alt="abc" />
              </Box>

              <Box>
                <Typography variant="subtitle1">{title}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={4} xs={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box mt={1}>
                <Typography variant="subtitle1">{units}| pc(s)</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={4} xs={4}>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <Box mt={1}>
                <Typography variant="subtitle1">Rs. {price}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider width="100%" />
    </div>
  );
}
