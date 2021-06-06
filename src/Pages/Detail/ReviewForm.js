import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import { TextField, Typography, Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "40ch",
    },
  },
}));

export default function ReviewForm() {
  const [value, setValue] = React.useState(2);
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container>
          <Grid item md={10}>
            <Box>
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                autoComplete="current-name"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box mt={3}>
              <Typography>
                <Rating
                  size="large"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Typography>
            </Box>
          </Grid>
          <Grid item md={12}>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={8}
              cols={8}
              variant="outlined"
              width="100ch"
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
}
