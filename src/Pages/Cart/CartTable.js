import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CartRow from "./CartRow";
import { useHistory } from "react-router";
import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Box,
  TableContainer,
  Button,
  Typography,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  tableHeading: {
    background: theme.palette.secondary.main,
  },
  tableStyle: {
    fontWeight: 900,
    fontSize: "28px",
  },
}));

export default function CartTable(props) {
  let history = useHistory();
  const classes = useStyles();
  const { cartTotal, cartItems, removeFromCart, updateQuantity } = props;

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead className={classes.tableHeading}>
            <TableRow className={classes.tableStyle}>
              <TableCell>Id#</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Update</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.length > 0 ? (
              <CartRow
                cartTotal={cartTotal}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ) : (
              // "No Item Found!!!"
              <Box display="center" alignItems="center" justifyContent="center">
                <Typography variant="h3">No Item Found!!!</Typography>
              </Box>
            )}
          </TableBody>
        </Table>

        <Box mt={2}>
          <Box align="left">
            <Button
              onClick={() => history.push("/collection")}
              variant="outlined"
              color="secondary"
            >
              Continue to Shopping
            </Button>
          </Box>
          <Box align="right">
            <Button
              onClick={() => history.push("/checkout")}
              variant="outlined"
              color="secondary"
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      </TableContainer>
    </>
  );
}
