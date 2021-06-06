import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core/";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "40px",
  },
  appRoot: {
    background: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

export default function ProfileBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appRoot}>
          <Typography variant="h5" className={classes.title}>
            Your Profile
          </Typography>
          <i class="fas fa-edit"></i>
        </Toolbar>
      </AppBar>
    </div>
  );
}
