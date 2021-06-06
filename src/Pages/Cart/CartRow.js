import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableRow, TableCell, ButtonGroup, Button } from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const useStyles = makeStyles((theme) => ({
  tableStyle: {
    fontWeight: 700,
    fontSize: "18px",
  },
  textStyle: {
    fontWeight: 700,
    fontSize: "18px",
  },
  totalStyle: {
    fontWeight: 700,
    fontSize: "22px",
  },
  rowStyle: {
    fontSize: "15px",
    fontWeight: "bold",
  },
}));

export default function CartRow(props) {
  const classes = useStyles();
  const { cartTotal, cartItems, removeFromCart, updateQuantity } = props;
  const invoiceTaxes = cartTotal * TAX_RATE;
  const invoiceTotal = invoiceTaxes + cartTotal;

  return (
    <>
      {cartItems.map((row, i) => (
        <TableRow id={row.id}>
          <TableCell className={classes.rowStyle}>{i + 1}</TableCell>
          <TableCell align="right">
            <img src={row.image} width="60px" alt="cart" />
          </TableCell>
          <TableCell className={classes.rowStyle} align="right">
            {row.title}| {row.units} Pc(s)
          </TableCell>
          <TableCell className={classes.rowStyle} align="right">
            Rs. {row.cartQuantity} x {ccyFormat(row.price)}
          </TableCell>
          <TableCell align="right">
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
              variant="contained"
              size="small"
            >
              <Button
                onClick={() => updateQuantity(row, -1)}
                disabled={row.cartQuantity === 1}
              >
                -
              </Button>
              <Button>{row.cartQuantity}</Button>
              <Button
                onClick={() => updateQuantity(row, 1)}
                disabled={row.cartQuantity === 10}
              >
                +
              </Button>
            </ButtonGroup>
          </TableCell>
          <TableCell align="right">
            <Button
              onClick={() => removeFromCart(row)}
              startIcon={<DeleteIcon />}
              color="secondary"
            ></Button>
          </TableCell>
          <TableCell className={classes.rowStyle} align="right">
            {ccyFormat(row.price * row.cartQuantity)}
          </TableCell>
        </TableRow>
      ))}
      <TableRow>
        <TableCell rowSpan={4} />
        <TableCell colSpan={4} className={classes.tableStyle}>
          Subtotal
        </TableCell>
        <TableCell colSpan={4} align="right" className={classes.textStyle}>
          {ccyFormat(cartTotal)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={4} className={classes.tableStyle}>
          Tax
        </TableCell>
        <TableCell className={classes.textStyle} align="right">{`${(
          TAX_RATE * 100
        ).toFixed(0)} %`}</TableCell>
        <TableCell className={classes.textStyle} align="right">
          {ccyFormat(invoiceTaxes)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={5} className={classes.totalStyle}>
          Total
        </TableCell>
        <TableCell className={classes.textStyle} align="right">
          {ccyFormat(invoiceTotal)}
        </TableCell>
      </TableRow>
    </>
  );
}
