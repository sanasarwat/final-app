import React, { useContext } from "react";
import clsx from "clsx";
import { CartContext } from "../../helpers/CartProvider";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import CartDrawerList from "./CartDrawerList";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const useStyles = makeStyles((theme) => ({
  list: {
    width: 450,
  },
  fullList: {
    width: "auto",
  },
  sitebarDrawar: {
    position: "fixed",
    top: "50%",
    right: 0,
    marginTop: "-73px",
    width: "115px",
    height: "85px",
    backgroundColor: "#59b828",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px 0px 0px 5px",
    transition: "all 0.3s ease",
    zIndex: 9,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  cartCount: {
    color: "white",
    fonteight: 500,
    fontSize: "16px",
    lineHeight: 1,
    marginBottom: "12px",
  },

  totalPrice: {
    padding: "12px 15px",
    backgroundColor: "#fff",
    color: "#000000",
    lineHeight: 1,
    textAlign: "center",
    borderRadius: "5px",
    fontWeight: 500,
    display: "block",
    marginTop: "5px",
  },
}));

export default function TemporaryDrawer() {
  const { cartTotal, totalCartItems } = useContext(CartContext);
  const invoiceTaxes = cartTotal * TAX_RATE;
  const invoiceTotal = invoiceTaxes + cartTotal;
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <CartDrawerList />
      </List>
    </div>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <div className={classes.sitebarDrawar}>
              <div className={classes.cartCount}>
                <i class="fas fa-shopping-basket"></i>
                <span>{totalCartItems} Item</span>
              </div>
              <div className={classes.totalPrice}>
                {ccyFormat(invoiceTotal)}
              </div>
            </div>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}
