import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Paper } from "@material-ui/core/";
const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    height: "100%",
  },
  totalStyle: {
    background: theme.palette.grey[300],
    width: "48ch",
  },
  checkoutBtn: { width: "60ch" },
}));

export default function CartDrawerListTotal(props) {
  const { cartTotal } = props;
  const classes = useStyles();

  const invoiceTaxes = cartTotal * TAX_RATE;
  const invoiceTotal = invoiceTaxes + cartTotal;
  return (
    <>
      <Paper className={classes.totalStyle} component={Box} p={3} elevation>
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
