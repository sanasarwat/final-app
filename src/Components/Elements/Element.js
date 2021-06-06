import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    borderColor: theme.palette.primary.main,
    borderBottom: "2px solid primary",
  },
}));

export default function Element(props) {
  const { title, description, icon } = props.caticon;

  const classes = useStyles();
  return (
    <div>
      <Paper
        component={Box}
        borderBottom={4}
        m={1}
        elevation={1}
        className={classes.paperStyle}
      >
        <Box p={3}>
          <Grid container>
            <Grid item md={2} sm={2} xs={2} lg={2}>
              <Box mt={1} color="primary.main">
                {icon}
              </Box>
            </Grid>
            <Grid item md={10} sm={10} xs={10} lg={10}>
              <Box mx={2}>
                <Typography variant="h6">{title}</Typography>
                <Typography
                  align="left"
                  variant="subtitle2"
                  color="textSecondary"
                >
                  {description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}
