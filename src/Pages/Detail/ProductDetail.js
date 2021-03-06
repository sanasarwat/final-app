import React, { useState, useContext } from "react";
import { getProductById } from "../../data/products";
import { CartContext } from "../../helpers/CartProvider";
import { WishContext } from "../../helpers/WishProvider";
import DetailTabs from "./Tabs";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  ButtonGroup,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    [theme.breakpoints.up("xs")]: {
      width: "180px",
    },
  },
}));

export default function ProductDetail() {
  const classes = useStyles();
  let { id } = useParams();
  let product = getProductById(id);
  const [qty, setQty] = useState(1);

  const { addToCart, unitsInCart } = useContext(CartContext);
  const { addToWish } = useContext(WishContext);

  const handleAddToCart = () => {
    addToCart(product, qty);
    setQty(1);
  };
  const handleAddToWish = () => {
    addToWish(product);
  };

  const [wish, setWish] = useState(false);

  const handleWish = (e) => {
    setWish(e.target.checked);
    console.log(e.target.checked);
  };

  return (
    <>
      <Paper component={Box} py={6} px={4} m={2} boxShadow={4}>
        <Grid container>
          <Grid item md={7} xs={12} sm={12} lg={7}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <img
                src={product.image}
                alt="detail"
                className={classes.imageStyle}
              />
            </Box>
          </Grid>

          <Grid item md={5} xs={12} sm={12} lg={5}>
            <Box>
              <Box display="flex" justifyContent="flex-end" alignItems="center">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={wish}
                        icon={<FavoriteBorderSharpIcon />}
                        checkedIcon={<FavoriteSharpIcon />}
                        onChange={handleWish}
                        color="secondary"
                        onClick={handleAddToWish}
                      />
                    }
                  />
                </FormGroup>
              </Box>
              <Box mb={1}>
                <Typography variant="subtitle1" color="textSecondary">
                  {product.category}
                </Typography>
              </Box>
              <Box mb={1}>
                <Typography variant="h4">{product.title}</Typography>
              </Box>
              <Box mb={1}>
                <Typography variant="subtitle1">
                  {product.units} Pc(s).
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5">Rs. {product.price * qty}</Typography>
              </Box>

              <Box py={2} mb={1}>
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                >
                  <Button onClick={() => setQty(qty - 1)} disabled={qty === 1}>
                    -
                  </Button>
                  <Button>{qty}</Button>
                  <Button onClick={() => setQty(qty + 1)} disabled={qty === 10}>
                    +
                  </Button>
                </ButtonGroup>
              </Box>
              <Box>
                <Typography color="textSecondary" variant="body1">
                  {product.description}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                p={2}
                alignItems="center"
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </Box>
              {!!unitsInCart(product) && (
                <Box mt={2}>
                  <Typography variant="subtitle2">
                    There are {unitsInCart(product)} units of this item in cart!
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <DetailTabs />
    </>
  );
}
