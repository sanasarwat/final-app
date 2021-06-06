import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TocIcon from "@material-ui/icons/Toc";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "40px",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function ProfileHeaderList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <TocIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Your Orders" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LocalShippingIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Track Orders" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <PersonOutlineIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Your Profile" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <FavoriteBorderIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Wish List" />
      </ListItem>
    </List>
  );
}
