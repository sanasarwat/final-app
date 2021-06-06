import React from "react";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Header/AppBar";
import ProfileBanner from "../../Components/profile/profile-banner";
import ProfileHeader from "../../Components/profile/profile-header";
import { Container, Grid, Paper, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OrderSummary from "./order-summary";
import Wallet from "./wallet";
import Reward from "./reward";
import ProfileHeaderList from "../../Components/profile/profile-header-mobile";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    background: theme.palette.grey[100],
    paddingTop: theme.spacing(2),
  },
  paperStyle: {
    marginTop: "40px",
  },
}));

export default function UserDashboard() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Breadcrums />
      <ProfileBanner />
      <Container className={classes.root}>
        <ProfileHeader />
        <ProfileHeaderList />
        <Paper component={Box} p={4} square className={classes.paperStyle}>
          <Box>
            <Typography variant="h4">My Orders</Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item md={8} sm={12} xs={12} lg={8}>
              <OrderSummary />
            </Grid>
            <Grid item md={4} sm={9} xs={9} lg={4}>
              <Wallet />
              <Reward />
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Footer />
    </>
  );
}
