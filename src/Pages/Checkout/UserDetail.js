import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Paper, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "30ch",
    },
  },
  root1: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "30ch",
    },
  },
}));

export default function UserDetail() {
  const classes = useStyles();
  return (
    <>
      <Paper component={Box} p={3} square mt={2} mb={2}>
        <Box>
          <Typography variant="h5">User Detail</Typography>
        </Box>
        <form className={classes.root} noValidate autoComplete="off">
          <Box>
            <Box>
              <TextField
                id="outlined-name-input"
                type="text"
                autoComplete="current-name"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-email-input"
                type="email"
                autoComplete="current-email"
                variant="outlined"
                size="small"
              />
            </Box>

            <Box className={classes.root1}>
              <TextField
                id="outlined-email-input"
                type="email"
                autoComplete="current-email"
                variant="outlined"
                size="small"
              />
            </Box>
            <Box className={classes.root1}>
              <TextField
                id="outlined-email-input"
                type="email"
                autoComplete="current-email"
                variant="outlined"
                size="small"
              />
            </Box>
            <Box className={classes.root1}>
              <TextField
                id="outlined-email-input"
                type="email"
                autoComplete="current-email"
                variant="outlined"
                size="small"
              />
            </Box>
            <Box>
              <TextField
                id="outlined-name-input"
                type="text"
                autoComplete="current-name"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-email-input"
                type="email"
                autoComplete="current-email"
                variant="outlined"
                size="small"
              />
            </Box>
          </Box>
        </form>
      </Paper>
    </>
  );
}
