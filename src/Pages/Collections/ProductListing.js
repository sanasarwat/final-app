import React from "react";
import { ProductCard } from "./ProductCard";
import { Container, Grid } from "@material-ui/core/";

export function ProductListing(props) {
  const { products } = props;
  return (
    <>
      <Container>
        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid item lg={4} md={4} sm={6} xs={12} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
