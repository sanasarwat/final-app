import React from "react";
import AdvertisementListing from "../../Components/Advertisement/AdvListing";
import BrandListing from "../../Components/Brand/BrandListing";
import Breadcrumbs from "../../Components/Breadcrums/Breadcrums";
import ElementListing from "../../Components/Elements/ElementListing";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Header/AppBar";
import BottomHeader from "../../Components/Header/BottomHeader";
import MenuListing from "../Menu/MenuListing";
import CartDrawer from "../Cart/CartDrawer";
import { Container, makeStyles } from "@material-ui/core";
import BottomCartDrawer from "../Cart/BottomCartDrawer";
import TopHeader from "../../Components/Header/TopHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    background: theme.palette.grey[200],
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Breadcrumbs />
      <Container className={classes.root}>
        <CartDrawer />
        <ElementListing />
        <MenuListing />
        <BrandListing />
        <AdvertisementListing />
      </Container>
      <BottomHeader />

      <Footer />
    </div>
  );
}
