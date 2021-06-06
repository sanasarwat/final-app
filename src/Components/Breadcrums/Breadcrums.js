import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Breadcrumbs as MuiBreadCrumbs,
  Link,
  Typography,
  Box,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: theme.palette.grey[200],
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  link: {
    display: "flex",
  },
}));

function textFormat(str) {
  return `${str.charAt(0).toUpperCase() + str.slice(1)}`;
}

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="flex-end" p={3} mb={1} boxShadow={9}>
        <MuiBreadCrumbs aria-label="breadcrumb">
          {pathnames.length > 0 ? (
            <Link
              style={{
                cursor: "pointer",
                color: "black",
                fontWeight: "bold",
              }}
              onClick={() => history.push("/")}
              color="inherit"
              to="/"
              className={classes.link}
            >
              Home
            </Link>
          ) : (
            <Typography style={{ fontWeight: "bold" }} color="textPrimary">
              Home
            </Typography>
          )}

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 2).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Typography key={name} color="textPrimary">
                {textFormat(name)}
              </Typography>
            ) : (
              <Link
                key={name}
                color="inherit"
                onClick={() => history.push(routeTo)}
                className={classes.link}
                style={{
                  cursor: "pointer",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {name}
              </Link>
            );
          })}
        </MuiBreadCrumbs>
      </Box>
    </div>
  );
};

export default withRouter(Breadcrumbs);
