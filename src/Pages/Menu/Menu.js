import { Paper, Box, Typography, Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { FilterContext } from "../../helpers/FilterProvider";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    maxWidth: 380,
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
  },
}));

export default function Menu(props) {
  let history = useHistory();
  const { setSelectedMenu } = useContext(FilterContext);
  const { category } = props;
  const { title, icon } = props.category;

  //console.log(category);

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
            {icon}
          </Box>

          <Box>
            {/* <Link onClick={() => history.push("/collection")}>
              <Typography
                onClick={() => setSelectedMenu(category.title)}
                className={classes.Link}
                variant="subtitle2"
              >
                {category.title}
              </Typography>
            </Link> */}
            <Link to="/collection" onClick={() => setSelectedMenu(title)}>
              <Typography
                onClick={() => setSelectedMenu(category.title)}
                className={classes.Link}
                variant="subtitle2"
              >
                {title}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
