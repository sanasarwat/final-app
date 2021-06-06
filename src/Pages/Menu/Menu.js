import { Paper, Box, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    "&:hover": {
      boxShadow: theme.shadows[5],
      borderColor: theme.palette.secondary.main,
      border: "1px solid",
      cursor: "pointer",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
    padding: "16px 16px",
    fontSize: "20px",
  },
}));

export default function Menu(props) {
  let history = useHistory();

  const { setSelectedMenu, category } = props;
  // const { icon } = props.category;

  const classes = useStyles();
  return (
    <>
      <Paper
        component={Box}
        m={1}
        mb={1}
        elevation={1}
        align="center"
        className={classes.paperStyle}
        variant="outlined"
      >
        <Box p={2}>
          <Box color="primary.main">
            {/* <Icon className="fas fa-carrot" size="large" /> */}
            {category.icon}
          </Box>

          <Box>
            <Link onClick={() => history.push("/collection")}>
              {/* <Button onClick={() => setSelectedMenu(category)}>
                {category}
              </Button> */}
              {/* <Button>{category}</Button> */}

              <Typography className={classes.Link} variant="h6">
                {category.title}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
