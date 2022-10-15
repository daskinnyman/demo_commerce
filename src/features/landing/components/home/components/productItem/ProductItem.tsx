import { GridItem, Stack, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../../../../mock-api/models/product";

function ProductItem({ product }: { product: Product }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <GridItem w={"100%"}>
      <Stack spacing={2} onClick={handleProductClick}>
        <Image objectFit={'fill'} src={product.image} alt={product.description} />
        <Text fontSize={"lg"} as={"b"}>
          {product.name}
        </Text>
        <Text fontSize={"medium"} noOfLines={2}>
          {product.description}
        </Text>
        <Text fontSize={"medium"} as={"p"} color="tomato">
          Price: {product.price}
        </Text>
      </Stack>
    </GridItem>
  );
}

export default ProductItem;
