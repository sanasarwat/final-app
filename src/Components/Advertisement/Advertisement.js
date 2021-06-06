import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, CardMedia, Card, Grid } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    maxWidth: 368,
    marginBottom: "8px",
    alignItem: "center",
  },
  media: {
    height: 220,
  },
});

export default function AdvertisementCard(props) {
  const { image } = props.adv;
  const classes = useStyles();

  return (
    <Grid container align="center">
      <Grid item md={12} lg={12} sm={12} xs={12}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} />
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
