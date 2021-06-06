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

export default function ContactInfo() {
  const classes = useStyles();
  return (
    <>
      <Paper component={Box} p={3} square>
        <Box>
          <Typography variant="h5">Contact Info</Typography>
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
              <Typography variant="h6">Home</Typography>
              <Box wrap="nowrap">
                <Typography variant="subtitle1">
                  27 Street, 2569 Heritage Road Visalia, CA 93291
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
              <Typography variant="h6">Home</Typography>
              <Typography variant="subtitle1">
                27 Street, 2569 Heritage Road Visalia, CA 93291
              </Typography>
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
              <Typography variant="h6">Home</Typography>
              <Typography variant="subtitle1">
                27 Street, 2569 Heritage Road Visalia, CA 93291
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Paper>
    </>
  );
}
