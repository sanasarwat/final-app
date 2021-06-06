import React from "react";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Header/AppBar";
import ProfileBanner from "../../Components/profile/profile-banner";
import TrackOrders from "./track-order";

export default function TrackOrder() {
  return (
    <>
      <NavBar />
      <Breadcrums />
      <ProfileBanner />
      <TrackOrders />
      {/* <TrackOrderSingle /> */}
      {/* <OrderDetail /> */}

      <Footer />
    </>
  );
}
