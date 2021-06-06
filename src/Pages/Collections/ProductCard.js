import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography,
} from "@material-ui/core/";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  productItem: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    overflow: "hidden",
    transition: "all 0.3s ease",
    align: "center",
  },

  productCard: {
    maxWidth: "420px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "425px",
    },
    // height: "100%",
  },
  media: {
    height: 200,
  },

  cartBtn: {
    fontSize: "14px",
    alignItems: "right",
    border: "1px solid #e8eaee",
    padding: "10px 13px",
    borderRadius: "3px",
    lineHeight: "1px",
    color: "#59b828",
    transition: "all 0 ease 0s",
    // transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      borderColor: "#59b828",
      backgroundColor: "#59b828",
      color: "white",
    },
  },
  productTitle: {
    "&:hover": {
      color: "#59b828",
    },
  },
  cardAction: {
    display: "flex",
  },
  price: {
    color: "#59b828",
    fontSize: "16px",
  },
  priceDel: {
    // color: "#d7d7d7",
    marginLeft: "3px",
  },
  wishLink: {
    position: "absolute",
    right: "1px",
    top: "12px",
  },

  batch: {
    padding: "5px 10px",
    fontSize: "11px",
    textTransform: "uppercase",
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    fontWeight: "500",
    lineHeight: "1",
    minWidth: "45px",
    textAlign: "center",
    borderRadius: "1px",
    position: "absolute",
    left: "15px",
    top: "20px",
  },
}));

export function ProductCard(props) {
  const [wish, setWish] = useState(false);

  const handleWish = (e) => {
    setWish(e.target.checked);
    console.log(e.target.checked);
  };

  const { id, image, title, description, price, units, rating } = props.product;
  const classes = useStyles();
  const countReviews = rating;

  return (
    <>
      <Card className={(classes.productItem, classes.productCard)}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} />
          <span className={classes.batch}>Sale</span>
          <span className={classes.wishLink}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={wish}
                    icon={<FavoriteBorderSharpIcon />}
                    checkedIcon={<FavoriteSharpIcon />}
                    onChange={handleWish}
                    color="secondary"
                  />
                }
              />
            </FormGroup>
          </span>
          <CardContent>
            <Typography
              className={classes.productTitle}
              gutterBottom
              variant="h6"
            >
              <Link to={`/detail/${id}`}> {title}</Link>
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              {units} Pc(s)
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Box mt={1.5}>
              <Rating value={rating} readOnly name="half-rating" />
              <Typography component="span">({countReviews})</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions justify="space-around">
          <Box display="flex" justifyContent="flex-between">
            <Box flexGrow={1}>
              <Typography
                className={classes.price}
                variant="subtitle1"
                color="textSecondary"
                component="p"
              >
                Rs. {price}
              </Typography>
            </Box>
            <Box>
              <Typography
                className={classes.priceDel}
                variant="overline"
                color="textSecondary"
                component="p"
              >
                Rs. {price}
              </Typography>
            </Box>
            <Box>
              <Button
                className={classes.cartBtn}
                startIcon={<ShoppingCartIcon />}
              >
                Cart
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
