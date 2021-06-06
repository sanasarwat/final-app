import React from "react";
import { Typography, Box } from "@material-ui/core";

export default function Footer() {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="flex-between"
        p={1}
        bgcolor="background.paper"
        alignItems="center"
        mt={2}
      >
        <Box flexGrow={1} p={1}>
          <Typography variant="body1">
            Copyright © 2020 ITFocus. All Rights Reserved.
          </Typography>
        </Box>

        <Box p={1}>
          <Typography variant="body1">Privacy policies</Typography>
        </Box>

        <Box p={1}>
          <Typography variant="body1">Cookies</Typography>
        </Box>
      </Box>
    </div>
  );
}
