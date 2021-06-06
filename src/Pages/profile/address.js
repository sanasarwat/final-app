import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, Box } from "@material-ui/core";
import AddAdrress from "./add-address";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function AddressList() {
  const classes = useStyles();

  return (
    <>
      <Paper
        className={classes.root}
        component={Box}
        border={1}
        borderColor="primary.main"
      >
        <Box display="flex" justifyContent="space-between">
          <Box p={4} flexGrow={1}>
            <Box>
              <Typography variant="h6">Office</Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United
                States of America
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1">America</Typography>
            </Box>
          </Box>
          <Box p={3}>
            <i
              class="fas fa-edit"
              style={{ color: "green", margin: "0 10px" }}
            ></i>
            <i class="far fa-trash-alt"></i>
          </Box>
        </Box>
      </Paper>
      <Paper className={classes.root} component={Box}>
        <Box display="flex" justifyContent="space-between">
          <Box p={4} flexGrow={1}>
            <Box>
              <Typography variant="h6">Office</Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United
                States of America
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1">America</Typography>
            </Box>
          </Box>
          <Box p={3}>
            <i className="fas fa-edit"></i>
            <i className="far fa-trash-alt"></i>
          </Box>
        </Box>
      </Paper>
      <Paper component={Box} p={5} mt={2} mb={4}>
        <AddAdrress />
      </Paper>
    </>
  );
}
