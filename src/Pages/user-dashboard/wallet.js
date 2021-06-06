import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
    background: theme.palette.grey[100],
  },
  paperStyle: {
    borderRadius: "12px",
    "&:hover": {
      boxShadow: theme.shadows[5],
      borderColor: theme.palette.secondary.main,
      border: "1px solid",

      cursor: "pointer",
    },
  },
}));

export default function Wallet() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar variant="dense">
          <Grid container justify="space-between">
            <Typography variant="h6" className={classes.title}>
              My Wallet
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Paper component={Box} p={3} square>
        <Box>
          <Typography variant="subtitle2">My Balance</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1">Credits $100</Typography>
        </Box>
      </Paper>
      <Divider />
      <Paper component={Box} p={2} square>
        <Grid container justify="flex-end">
          <Box>
            <Typography variant="subtitle2">View Details</Typography>
          </Box>
        </Grid>
      </Paper>
    </>
  );
}
