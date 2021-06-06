import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Box,
  Typography,
  Grid,
  ButtonGroup,
  Button,
} from "@material-ui/core/";
import { CartContext } from "../../helpers/CartProvider";
import { red } from "@material-ui/core/colors";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CloseIcon from "@material-ui/icons/Close";
import CartDrawerListTotal from "./CartDrawerListTotal";
import { useHistory } from "react-router";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    height: "100%",
  },

  avatar: {
    backgroundColor: red[500],
    padding: "12px",
  },

  checkoutBtn: { width: "60ch" },
}));

export default function RecipeReviewCard() {
  let history = useHistory();
  const classes = useStyles();
  const {
    cartItems,
    cartTotal,
    totalCartItems,
    removeFromCart,
    updateQuantity,
  } = useContext(CartContext);

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              variant="rounded"
              aria-label="recipe"
              className={classes.avatar}
            >
              <ShoppingBasketIcon fontSize="large" />
            </Avatar>
          }
          title={`${totalCartItems}  Item`}
        />

        <CardContent>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Grid container justify="space-between">
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                  variant="contained"
                  orientation="vertical"
                  style={{ fontSize: 10 }}
                  mt={2}
                >
                  <Button
                    onClick={() => updateQuantity(item, -1)}
                    disabled={item.cartQuantity === 1}
                  >
                    -
                  </Button>
                  <Button>{item.cartQuantity}</Button>
                  <Button
                    onClick={() => updateQuantity(item, 1)}
                    disabled={item.cartQuantity === 10}
                  >
                    +
                  </Button>
                </ButtonGroup>
                <Box>
                  <img src={item.image} height="50px" width="60px" alt="cart" />
                </Box>
                <Typography variant="subtitle1">
                  {item.cartQuantity} x {item.title} | {item.units} Pc(s)
                </Typography>
                <Typography gutterBottom variant="h6">
                  Rs. {ccyFormat(item.cartQuantity * item.price)}
                </Typography>
                <Button
                  onClick={() => removeFromCart(item)}
                  startIcon={<CloseIcon />}
                  color="secondary"
                ></Button>
              </Grid>
            ))
          ) : (
            <Box align="center">
              <img
                src="../../images/cart/5.jpg"
                width="400px"
                height="400px"
                alt="cartimage"
              />
              <Typography variant="h3">No Item Found!</Typography>
            </Box>
          )}
        </CardContent>
        <CardActions disableSpacing>
          <CartDrawerListTotal cartTotal={cartTotal} />
        </CardActions>
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
            <Button
              size="large"
              color="secondary"
              variant="contained"
              className={classes.checkoutBtn}
              onClick={() => history.push("/checkout")}
            >
              Proceed To CheckOut
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
