import {
  GridItem,
  Stack,
  Text,
  Image,
  Box,
  HStack,
  Heading,
} from "@chakra-ui/react";
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
        <Image
          objectFit={"fill"}
          src={product.image}
          alt={product.description}
        />
        <Heading size={"md"}>{product.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <HStack>
            <Text>Color:</Text>
            <Box
              bgColor={product.colorCode}
              height={"15px"}
              width={"15px"}
              border={"1px"}
            ></Box>
          </HStack>
          <Text fontSize={"medium"} as={"p"} color="tomato">
            Price:
            <Text fontSize={"lg"} as={"b"}>
              {product.price}
            </Text>
          </Text>
        </HStack>
      </Stack>
    </GridItem>
  );
}

export default ProductItem;
