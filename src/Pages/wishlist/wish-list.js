import React, { useContext } from "react";
import WishlistItems from "./wishlist-items";
import { WishContext } from "../../helpers/WishProvider";
import { Box, Paper, Grid, Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import WishTopBar from "../../Components/profile/wish-bar";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function WishListning() {
  const classes = useStyles();
  const { wishItems, removeFromWish } = useContext(WishContext);
  return (
    <>
      <WishTopBar />
      <Divider />
      <Paper component={Box} p={1} square className={classes.root}>
        <Grid container>
          {wishItems.map((product) => (
            <Grid key={product.id} item lg={12} md={12} sm={12} xs={12}>
              <WishlistItems
                product={product}
                removeFromWish={removeFromWish}
              />
            </Grid>
          ))}
          {/* {wishItems.map((item) => (
              <Box>{item.title}</Box>
            ))} */}
        </Grid>
      </Paper>
    </>
  );
}
