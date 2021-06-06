import { Typography, Box } from "@material-ui/core";
import React from "react";

export default function Description() {
  return (
    <>
      <Box p={2}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pulvinar massa metus, vitae pharetra lacus sodales sit amet. Morbi
          accumsan suscipit lacus, sit amet egestas magna elemen tum nec. Mauris
          urna enim, rutrum in iaculis nec, vehicula ut libero. Etiam sit amet
          ex orci. Duis eget consectetur libero, eget interdum metus. Aliquam
          rhoncus porttitor felis, a tincidunt ex scel erisque et. Morbi
          faucibus venenatis dignissim. Nullam ut facilisis mauris. In hac
          habitasse platea dictumst.
        </Typography>
      </Box>

      <Box p={2}>
        <Typography variant="body1">
          Pellentesque luctus augue ipsum, ut tincidunt odio tempus at. Nullam
          ac quam venenatis, bibendum eros at, placerat risus. Maecenas cursus
          elit non nisl finibus congue. Donec posuere fringilla ante eu
          vehicula. Fusce sed erat quis nisi gravida vehicula id vitae dolor. In
          at libero pretium, maximus lorem vitae, pharetra turpis feugiat
          facilisis ullamcorper.
        </Typography>
      </Box>
    </>
  );
}
