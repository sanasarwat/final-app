import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appRoot: {
    background: "white",
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

export default function OrderDetailBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appRoot}>
          <Typography variant="h5" className={classes.title}>
            Order Details
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
