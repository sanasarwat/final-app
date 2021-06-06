import React from "react";

import ProductDetail from "./ProductDetail";
import NavBar from "../../Components/Header/AppBar";
import BreadCrums from "../../Components/Breadcrums/Breadcrums";
import { makeStyles, Container } from "@material-ui/core";
import BottomHeader from "../../Components/Header/BottomHeader";
import Footer from "../../Components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    background: theme.palette.grey[200],
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
}));

export default function Detail() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <BreadCrums />
      <Container className={classes.root}>
        <ProductDetail />
      </Container>
      <BottomHeader />
      <Footer />
    </>
  );
}
