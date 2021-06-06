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

export default function OrderSummary() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar variant="dense">
          <Grid container justify="space-between">
            <Typography variant="h6" className={classes.title}>
              My Orders
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Items
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Status
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Paper component={Box} p={3} square>
        <Grid container justify="space-between">
          <Box>
            <Box>
              <Typography variant="subtitle2">Order#48376837</Typography>
            </Box>
            <Box>
              <Typography variant="body2">09/21/2020</Typography>
            </Box>
            <Box>
              <Typography variant="body2">USD 2342</Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2">02items</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">Pending</Typography>
          </Box>
        </Grid>
      </Paper>
      <Divider />
      <Paper component={Box} p={2} square>
        <Grid container justify="space-between">
          <Box>
            <Typography variant="subtitle2">TrackOrder</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">View Details</Typography>
          </Box>
        </Grid>
      </Paper>
    </>
  );
}
