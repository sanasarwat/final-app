import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React from "react";
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },

  title: {
    margin: theme.spacing(2, 0, 2),
  },
}));
export default function DeliveryExchange() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <>
      <Box p={1}>
        <Typography variant="h5">Return & Exchange Policy</Typography>
      </Box>
      <Box p={2}>
        <Typography variant="body1">
          Dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Claritas est etiam, qui sequitur mutationem consuetudium lectorum.
          Mirum est notare quam littera gothica, quam nunc putamus parum claram,
          anteposuerit litterarum. Claritas est etiam processus dynamicus, qui
          sequitur mutationem consuetudium lectorum. Mirum est notare quam
          littera gothica, quam nunc putamus parum claram, anteposuerit
          litterarum formas.
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              )}
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          {generate(
            <ListItem>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
          )}
        </Grid>
      </Grid>
      <Box p={2}>
        <Typography variant="body1">
          Dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Claritas est etiam, qui sequitur mutationem consuetudium lectorum.
          Mirum est notare quam littera gothica, quam nunc putamus parum claram,
          anteposuerit litterarum. Claritas est etiam processus dynamicus, qui
          sequitur mutationem consuetudium lectorum. Mirum est notare quam
          littera gothica, quam nunc putamus parum claram, anteposuerit
          litterarum formas.
        </Typography>
      </Box>
    </>
  );
}
