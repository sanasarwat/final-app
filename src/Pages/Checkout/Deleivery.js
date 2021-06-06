import React from "react";
import {
  Typography,
  Box,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";

export default function Delivery() {
  // const classes = useStyles();
  const [value, setValue] = React.useState("Jazz Cash/Easy Paisa");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Paper component={Box} p={3} square mt={2} mb={2}>
        <Box>
          <Typography variant="h5">Delivery Detail</Typography>
        </Box>
        <Box p={2}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Bank Transfer"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Cash On Delivery"
              />
              <FormControlLabel
                value="disabled"
                control={<Radio />}
                label="Jazz Cash/Easy Paisa"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Paper>
    </>
  );
}
