import React from "react";
import { products } from "../../data/products";
import OrderItems from "./order-items";
import { Box } from "@material-ui/core";

export default function OrderListning() {
  return (
    <div>
      {products.map((product) => (
        <Box key={product.id}>
          <OrderItems product={product} />
        </Box>
      ))}
    </div>
  );
}
