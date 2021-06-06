import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/Contact";
import Collections from "./Pages/Collections";
import Detail from "./Pages/Detail";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import WishList from "./Pages/wishlist";
import UserDashboard from "./Pages/user-dashboard";
import TrackOrder from "./Pages/track-order";
import TrackOrderSingle from "./Pages/track-order/track-order-single";
import OrderDetail from "./Pages/track-order/order-detail";
import Profile from "./Pages/profile";

function AppRoute() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact-us">
              <ContactUs />
            </Route>
            <Route exact path="/collection">
              <Collections />
            </Route>
            <Route exact path="/detail/:id">
              <Detail />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route path="/wish-list">
              <WishList />
            </Route>
            <Route path="/user-dashboard">
              <UserDashboard />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/track-order">
              <TrackOrder />
            </Route>
            <Route path="/track-order-single">
              <TrackOrderSingle />
            </Route>

            <Route path="/order-details">
              <OrderDetail />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default AppRoute;
