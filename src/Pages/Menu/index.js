import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import MenuListing from "./menu-listing";
import { FilterContext } from "../../helpers/FilterProvider";

export default function Category() {
  const { setSelectedMenu } = useContext(FilterContext);

  return (
    <>
      <Container>
        <Grid container>
          <Grid>
            <MenuListing setSelectedMenu={setSelectedMenu} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
