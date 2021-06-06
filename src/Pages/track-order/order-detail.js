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
import { useHistory } from "react-router";
import NavBar from "../../Components/Header/AppBar";
import ProfileBanner from "../../Components/profile/profile-banner";
const useStyles = makeStyles((theme) => ({
  orderStyle: {
    background: theme.palette.grey[200],
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

export default function OrderDetail() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div>
      <NavBar />
      <Breadcrums />
      <ProfileBanner />
      <Container className={classes.root}>
        <Paper component={Box} square className={classes.paperStyle}>
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
                variant="contained"
                color="secondary"
                onClick={() => history.push("/track-order-single")}
              >
                Track Order
              </Button>
            </Box>
          </Grid>
          <OrderDetailBar />
          <OrderListning />
          <OrderTotal />
        </Paper>
      </Container>
    </div>
  );
}
