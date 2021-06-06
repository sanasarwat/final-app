import React from "react";
import { advertisement } from "../../data/advertisement";
import AdvertisementCard from "./Advertisement";
import { Grid, Container } from "@material-ui/core";

export default function AdvertisementListing() {
  return (
    <div>
      <Container>
        <Grid container>
          {advertisement.map((adv) => (
            <Grid item lg={4} md={4} sm={12} xs={12} key={adv.id}>
              <AdvertisementCard adv={adv} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
