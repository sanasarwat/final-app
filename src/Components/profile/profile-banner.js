import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/images/profile/page-header.jpg"
    })`,
    backgroundRpeat: "no-rpeat",
    backgroundSize: "cover",
    marginTop: "0px",
    position: "relative",
  },
  container: {
    position: "absolute",
    marginLeft: "120px",
    marginTop: "70px",
  },

  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));
export default function ProfileBanner() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.container}>
          <Box>
            <Avatar
              alt="Remy Sharp"
              src="/images/profile/thumb.jpg"
              className={classes.large}
            />
          </Box>

          <Box mt={1}>
            <Typography variant="h5">Jhone Doe</Typography>
            <Typography variant="subtitle1">
              Lorem Ipsum is simply dummy text.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
