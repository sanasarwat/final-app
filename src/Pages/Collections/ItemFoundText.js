import React from "react";
import { Container, Typography, Box } from "@material-ui/core";

export default function ItemFoundText(props) {
  const { total, string } = props;
  return (
    <>
      <Container>
        <Box mt={4} mb={2}>
          <Typography variant="subtitle1">
            {total} Items found for {`"${string}"`}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
