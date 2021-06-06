import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "30ch",
    },
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

export default function SchedualInfo() {
  const classes = useStyles();
  return (
    <>
      <Paper component={Box} p={3} square>
        <Box>
          <Typography variant="h5">Delivery Schedule</Typography>
        </Box>
        <Grid container justify="space-evenly">
          <Paper
            component={Box}
            m={1}
            p={2}
            width="15%"
            elevation={1}
            align="center"
            className={classes.paperStyle}
            variant="outlined"
          >
            <Box p={2}>
              <Typography variant="h6">Express-Delivery</Typography>
              <Box wrap="nowrap">
                <Typography variant="subtitle1">
                  90 min express delivery
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper
            component={Box}
            m={1}
            p={2}
            elevation={1}
            width="15%"
            align="center"
            className={classes.paperStyle}
            variant="outlined"
          >
            <Box p={1}>
              <Typography variant="h6">8am-11am</Typography>
              <Typography variant="subtitle1">8.00 AM - 11.00 AM</Typography>
            </Box>
          </Paper>
          <Paper
            component={Box}
            m={1}
            p={2}
            width="15%"
            elevation={1}
            align="center"
            className={classes.paperStyle}
            variant="outlined"
          >
            <Box p={1}>
              <Typography variant="h6">11am-2pm</Typography>
              <Typography variant="subtitle1">11.00 AM - 2.00 PM</Typography>
            </Box>
          </Paper>
          <Paper
            component={Box}
            m={1}
            p={2}
            width="15%"
            elevation={1}
            align="center"
            className={classes.paperStyle}
            variant="outlined"
          >
            <Box p={1}>
              <Typography variant="h6">2pm-5pm</Typography>
              <Typography variant="subtitle1">2.00 PM - 5.00 PM</Typography>
            </Box>
          </Paper>
          <Paper
            component={Box}
            m={1}
            p={2}
            width="15%"
            elevation={1}
            align="center"
            className={classes.paperStyle}
            variant="outlined"
          >
            <Box p={1}>
              <Typography variant="h6">5pm-8pm</Typography>
              <Typography variant="subtitle1">5.00 PM - 8.00 PM</Typography>
            </Box>
          </Paper>
          <Paper
            component={Box}
            m={1}
            p={2}
            width="15%"
            elevation={1}
            align="center"
            className={classes.paperStyle}
            variant="outlined"
          >
            <Box p={1}>
              <Typography variant="h6">Next Day</Typography>
              <Typography variant="subtitle1">Next Day</Typography>
            </Box>
          </Paper>
        </Grid>
      </Paper>
    </>
  );
}
