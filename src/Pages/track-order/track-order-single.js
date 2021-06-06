import {
  Box,
  Typography,
  Grid,
  Button,
  Container,
  Paper,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OrderDetailBar from "../../Components/profile/order-detail-bar";
import OrderListning from "./order-listning";
import OrderTotal from "./order-total";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import NavBar from "../../Components/Header/AppBar";
import ProfileBanner from "../../Components/profile/profile-banner";
import TrackStepper from "./track-stepper";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  orderStyle: {
    background: theme.palette.grey[100],
    marginTop: "20px",
  },
  root: {
    maxWidth: "100%",
    background: theme.palette.grey[100],
    paddingTop: theme.spacing(2),
  },
  paperStyle: {
    marginTop: "60px",
  },
}));

export default function TrackOrderSingle() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div>
      <NavBar />
      <Breadcrums />
      <ProfileBanner />
      <Container className={classes.root}>
        <Paper component={Box} square className={classes.paperStyle}>
          <Box p={3}>
            <Typography variant="h5">Track Order</Typography>
          </Box>
          <Grid
            container
            justify="space-between"
            className={classes.orderStyle}
          >
            <Box p={3}>
              <Box>
                <Typography variant="subtitle2">Order#48376837</Typography>
              </Box>
              <Box>
                <Typography variant="body2">09/21/2020</Typography>
              </Box>
              <Box>
                <Typography variant="body2">USD 2342</Typography>
              </Box>
            </Box>
            <Box p={3}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => history.push("/order-details")}
              >
                Order Details
              </Button>
            </Box>
          </Grid>
          <OrderDetailBar />
          <OrderListning />
          <OrderTotal />
          <TrackStepper />
        </Paper>
      </Container>
    </div>
  );
}
