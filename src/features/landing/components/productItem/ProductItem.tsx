import { GridItem, Stack, Text } from "@chakra-ui/react";
import { Product } from "../../../../mock-api/models/product";

function ProductItem({ product }: { product: Product }) {
  return (
    <GridItem w={"100%"}>
      <Stack spacing={2}>
        <img src={product.image} alt={product.description} />
        <Text fontSize={"lg"} as={"b"}>{product.name}</Text>
        <Text fontSize={"medium"} noOfLines={2}>{product.description}</Text>
        <Text fontSize={"medium"} as={"p"} color='tomato'>Price: {product.price}</Text>
      </Stack>
    </GridItem>
  );
}

export default ProductItem;
