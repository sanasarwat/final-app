import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, CardMedia, Card, Container } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    maxWidth: 380,
    marginBottom: "8px",
  },
  media: {
    height: 120,
  },
});

export default function BrandCard(props) {
  const { image } = props.brand;
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} />
        </CardActionArea>
      </Card>
    </Container>
  );
}
