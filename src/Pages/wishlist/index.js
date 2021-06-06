import React from "react";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Header/AppBar";
import ProfileBanner from "../../Components/profile/profile-banner";
import ProfileHeader from "../../Components/profile/profile-header";
import WishListning from "./wish-list";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProfileHeaderList from "../../Components/profile/profile-header-mobile";
import BottomHeader from "../../Components/Header/BottomHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    background: theme.palette.grey[100],
    paddingTop: theme.spacing(2),
  },
}));

export default function WishList() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Breadcrums />
      <ProfileBanner />
      <Container className={classes.root}>
        <ProfileHeader />
        <ProfileHeaderList />
        <WishListning />
      </Container>
      <BottomHeader />
      <Footer />
    </>
  );
}
