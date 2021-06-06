import React from "react";
import CartSummary from "./CartSummary";
import ContactInfo from "./ContactInfo";
import NavBar from "../../Components/Header/AppBar";
import UserDetail from "./UserDetail";
import SchedualInfo from "./Sechudal";
import Delivery from "./Deleivery";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Footer from "../../Components/Footer/Footer";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    background: theme.palette.grey[200],
    paddingTop: theme.spacing(2),
  },
}));

export default function CheckOut() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Breadcrums />
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={8} lg={8} xs={12} sm={12}>
            <ContactInfo />
            <UserDetail />
            <SchedualInfo />
            <Delivery />
          </Grid>
          <Grid item md={4} lg={4} xs={12} sm={12} spacing={2}>
            <CartSummary />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
