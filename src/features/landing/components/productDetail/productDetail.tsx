import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Product } from "../../../../mock-api/models/product";
import { GenericResponse, Nullable } from "../../../../shared/types";
import { httpClient } from "../../../../shared/utils/httpClient";

const getProduct = async (productId: Nullable<string>) => {
  if (!productId) {
    return null;
  }
  const resp = await httpClient.get<GenericResponse<Product>>(
    `api/products/${productId}`
  );
  return resp.data;
};

const ProductDetail = () => {
  const productId = useParams();

  const { data: product } = useQuery(
    ["products", productId?.id],
    () => getProduct(productId?.id),
    { enabled: productId?.id !== undefined || productId?.id !== "" }
  );
  return (
    <Container minWidth={"container.lg"}>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <GridItem w={"100%"}>
          <img src={product?.data?.image} alt={product?.data?.description} />
        </GridItem>
        <GridItem w={"100%"}>
          <Stack>
            <Text fontSize={"lg"} as={"b"}>
              {product?.data?.name}
            </Text>
            <Text fontSize={"medium"} noOfLines={2}>
              {product?.data?.description}
            </Text>
            <HStack>
              <Text fontSize={"medium"} noOfLines={2}>
                color:
              </Text>
              <Box
                backgroundColor={product?.data?.colorCode}
                border={"1px"}
                boxSize={10}
              ></Box>
            </HStack>

            <Text fontSize={"medium"} as={"p"} color="tomato">
              Price: {product?.data?.price}
            </Text>
            <Button>Add to cart</Button>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
