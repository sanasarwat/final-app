import React from "react";
import { Typography, Grid, IconButton, Box } from "@material-ui/core";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <div>
      <Box p={3}>
        <Grid container>
          <Grid item md={3}>
            <Box display="flex" justifyContent="flex-start">
              <IconButton>
                <Typography variant="subtitle1">000 000 000</Typography>
                <PhoneEnabledIcon />
              </IconButton>

              <IconButton>
                <Typography>Help & More</Typography>
                <HelpOutlineIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item md={6} align="center">
            <Box>
              <Typography>Shop</Typography>
            </Box>
          </Grid>
          <Grid item md={3} mx={4}>
            <Box display="flex" justifyContent="flex-end">
              <Link to="/wishlist">
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </Link>

              <IconButton>
                <AccountBoxIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
