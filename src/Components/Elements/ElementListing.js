import React from "react";
import { icons } from "../../data/icons";
import Element from "./Element";
import { Grid, Container } from "@material-ui/core";

export default function ElementListing() {
  return (
    <div>
      <Container>
        <Grid container justify="space-around">
          {icons.map((caticon) => (
            <Grid item lg={4} md={4} sm={12} xs={12} key={caticon.id}>
              <Element caticon={caticon} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
