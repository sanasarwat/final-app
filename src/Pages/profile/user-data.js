import React from "react";
import ProfileBar from "../../Components/profile/profile-bar";
import { Paper, Box, Divider, Typography } from "@material-ui/core";

export default function UserData() {
  return (
    <div>
      <ProfileBar />
      <Divider />
      <Paper component={Box} p={2} square>
        <Box
          ml={4}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mb={1}
        >
          <Box>
            <Typography variant="h6">Your Name</Typography>
          </Box>
          <Box ml={14}>
            <Typography variant="body1">Jhone Doe</Typography>
          </Box>
        </Box>
        <Box
          ml={4}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mb={1}
        >
          <Box>
            <Typography variant="h6">Email</Typography>
          </Box>
          <Box ml={14}>
            <Typography variant="body1">Jhone Doe@mail.com</Typography>
          </Box>
        </Box>
        <Box
          ml={4}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mb={1}
        >
          <Box>
            <Typography variant="h6">Mobile</Typography>
          </Box>
          <Box ml={14}>
            <Typography variant="body1">Jhone Doe</Typography>
          </Box>
        </Box>
        <Box
          ml={4}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mb={1}
        >
          <Box>
            <Typography variant="h6">City</Typography>
          </Box>
          <Box ml={14}>
            <Typography variant="body1">Jhone Doe</Typography>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
