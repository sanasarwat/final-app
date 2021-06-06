import React from "react";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import NavBar from "../../Components/Header/AppBar";
import ProfileBanner from "../../Components/profile/profile-banner";
import UserData from "./user-data";
import { makeStyles } from "@material-ui/core/styles";
import ProfileHeader from "../../Components/profile/profile-header";
import { Container } from "@material-ui/core";
import Footer from "../../Components/Footer/Footer";
import AddressBar from "../../Components/profile/address-book-bar";
import AddressList from "./address";
import AddAdrress from "./add-address";
import ProfileHeaderList from "../../Components/profile/profile-header-mobile";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    background: theme.palette.grey[100],
    paddingTop: theme.spacing(2),
  },
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Breadcrums />
      <ProfileBanner />
      <Container className={classes.root}>
        <ProfileHeader />
        <ProfileHeaderList />
        <UserData />
        <AddressBar />
        <AddressList />
      </Container>
      <Footer />
    </div>
  );
}
