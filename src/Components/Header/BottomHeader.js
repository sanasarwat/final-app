import React, { useContext } from "react";
import { CartContext } from "../../helpers/CartProvider";
import { makeStyles, Badge } from "@material-ui/core/";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import HelpIcon from "@material-ui/icons/Help";
import BottomCartDrawer from "../../Pages/Cart/BottomCartDrawer";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
      background: theme.palette.primary.main,
    },
  },
}));

export default function BottomHeader() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { totalCartItems } = useContext(CartContext);
  let history = useHistory();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction indicatorColor="secondary" icon={<HelpIcon />} />
      <BottomNavigationAction icon={<BottomCartDrawer />} />
      <BottomNavigationAction
        icon={
          <FavoriteIcon
            onClick={() => {
              history.push("wish-list");
            }}
          />
        }
      />
      <BottomNavigationAction
        icon={
          <PersonIcon
            onClick={() => {
              history.push("profile");
            }}
          />
        }
      />
    </BottomNavigation>
  );
}
