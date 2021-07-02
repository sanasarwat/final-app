import React from "react";
import { Grid } from "@material-ui/core";
import MenuListing from "./menu-listing";

export default function Category() {
  return (
    <>
      <Container>
        <Grid container>
          <Grid>
            <MenuListing />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
