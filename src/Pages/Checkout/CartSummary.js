import React, { useContext } from "react";
import { CartContext } from "../../helpers/CartProvider";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Typography, Grid, Divider } from "@material-ui/core";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
  totalStyle: {
    background: theme.palette.grey[300],
  },
}));

export default function CartSummary() {
  const classes = useStyles();
  const { cartItems, cartTotal } = useContext(CartContext);
  const invoiceTaxes = cartTotal * TAX_RATE;
  const invoiceTotal = invoiceTaxes + cartTotal;
  return (
    <>
      <Paper component={Box} p={3} elevation={1} spacing={2}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Cart Summary
          </Typography>
        </Box>
        {cartItems.map((item) => (
          <Grid container justify="space-between">
            <Box>
              <img src={item.image} height="50px" width="60px" alt="cart" />
            </Box>

            <Typography>
              {item.cartQuantity} x {item.title} | {item.units} Pc(s)
            </Typography>
            <Typography gutterBottom>
              Rs. {ccyFormat(item.cartQuantity * item.price)}
            </Typography>
          </Grid>
        ))}
      </Paper>

      <Divider />

      <Paper
        className={classes.totalStyle}
        component={Box}
        p={3}
        elevation
        spacing={2}
      >
        <Grid container justify="space-between">
          <Typography variant="h6" gutterBottom>
            Sub Total
          </Typography>
          <Typography variant="h6" gutterBottom>
            Rs. {ccyFormat(cartTotal)}
          </Typography>
        </Grid>
        <Grid container justify="space-between">
          <Typography variant="h6" gutterBottom>
            Tax (7%)
          </Typography>

          <Typography variant="h6" gutterBottom>
            Rs. {ccyFormat(invoiceTaxes)}
          </Typography>
        </Grid>
        <Grid container justify="space-between">
          <Typography variant="h4" gutterBottom>
            Grand Total
          </Typography>

          <Typography variant="h4" gutterBottom>
            Rs. {ccyFormat(invoiceTotal)}
          </Typography>
        </Grid>
      </Paper>
    </>
  );
}
