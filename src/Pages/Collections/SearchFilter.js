import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography, Grid, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  filterBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40px",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "55ch",
      [theme.breakpoints.up("xs")]: {
        width: "30ch",
      },
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 30,
  },
}));

export function SearchBar(props) {
  const classes = useStyles();
  const { searchHandler, placeholder } = props;
  return (
    <>
      <Paper component={Box} p={3} my={2}>
        <Typography variant="h6" id="range-slider" gutterBottom>
          Search Filter
        </Typography>
        <Box>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container>
              <Grid item md={10}>
                {/* <div className={classes.searchIcon}>
                  <SearchIcon />
                </div> */}
                <Box>
                  <TextField
                    id="outlined-name-input"
                    type="text"
                    autoComplete="current-name"
                    variant="outlined"
                    size="small"
                    onChange={searchHandler}
                    placeholder={placeholder}
                  />
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </>
  );
}
