import { Box, Divider, Typography } from "@material-ui/core";
import React from "react";

export default function OrderTotal() {
  return (
    <div>
      <Box p={3}>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Box>
            <Typography variant="h6">Sub Total</Typography>
          </Box>
          <Box>
            <Typography>$2.0</Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Box>
            <Typography variant="h6">Delevary Fee</Typography>
          </Box>
          <Box>
            <Typography>$2.0</Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Box>
            <Typography variant="h6">Total(inc) Vat</Typography>
          </Box>
          <Box>
            <Typography>$2.0</Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box mt={2} p={3}>
        <Typography variant="subtitle2">
          Ddelevary Time 10 may, 10am - 12am
        </Typography>
      </Box>
    </div>
  );
}
