import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Paper,
  Grid,
  AppBar,
  Toolbar,
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

export default function Reward() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar variant="dense">
          <Grid container justify="space-between">
            <Typography variant="h6" className={classes.title}>
              Rewards
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Paper component={Box} p={3} square>
        <Box>
          <Typography variant="subtitle1">1 Offer Active</Typography>
        </Box>
      </Paper>
    </>
  );
}
