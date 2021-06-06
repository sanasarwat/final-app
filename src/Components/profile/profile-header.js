import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  appRoot: {
    background: "white",
    borderRadius: "10px",
  },

  title: {
    flexGrow: 1,
  },
}));

export default function ProfileHeader() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appRoot}>
        <Toolbar>
          <Grid container justify="space-between">
            <Button
              onClick={() => {
                history.push("/user-dashboard");
              }}
              variant="contained"
              color="primary"
            >
              Your Orders
            </Button>

            <Button
              onClick={() => {
                history.push("/track-order");
              }}
              variant="contained"
              color="primary"
            >
              Track Orders
            </Button>

            <Button
              onClick={() => {
                history.push("/profile");
              }}
              variant="contained"
              color="primary"
            >
              Your Profile
            </Button>

            <Button
              onClick={() => {
                history.push("/wish-list");
              }}
              variant="contained"
              color="primary"
            >
              WishList
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
