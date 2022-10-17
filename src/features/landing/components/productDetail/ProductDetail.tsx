import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../../../mock-api/models/product";
import { GenericResponse, Nullable } from "../../../../shared/types";
import { httpClient } from "../../../../shared/utils/httpClient";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../shared/reducers/cartSlice/cartSlice";

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
  const dispatch = useDispatch();
  const productId = useParams();
  const navigate = useNavigate();

  const { data: product } = useQuery(
    ["products", productId?.id],
    () => getProduct(productId?.id),
    { enabled: productId?.id !== undefined || productId?.id !== "" }
  );

  const handleBreadCrumbClick = () => {
    navigate("/");
  };

  const handleAddCart = () => {
    dispatch(
      addToCart({
        productId: product?.data?.id,
        productImg: product?.data?.image,
        name: product?.data?.name,
        color: product?.data?.color,
        price: product?.data?.price,
        amount: 1,
      })
    );
  };

  return (
    <Container minWidth={"container.lg"}>
      <Breadcrumb paddingY={4}>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={handleBreadCrumbClick}>
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>{product?.data?.name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem w={"100%"}>
          <img src={product?.data?.image} alt={product?.data?.description} />
        </GridItem>
        <GridItem w={"100%"}>
          <Stack justifyContent={"space-between"} height={"100%"}>
            <Stack spacing={4}>
              <Text fontSize={"lg"} as={"b"}>
                {product?.data?.name}
              </Text>
              <HStack>
                <Text fontSize={"medium"} noOfLines={2}>
                  color:
                </Text>
                <Box
                  backgroundColor={product?.data?.colorCode}
                  border={"1px"}
                  boxSize={"20px"}
                ></Box>
              </HStack>
              <Text fontSize={"medium"} as={"p"} color="tomato">
                Price:
                <Text fontSize={"lg"} as={"b"}>
                  {product?.data?.price}
                </Text>
              </Text>
            </Stack>
            <Button
              leftIcon={
                <AiOutlineShoppingCart size={24}></AiOutlineShoppingCart>
              }
              colorScheme="blue"
              onClick={handleAddCart}
            >
              Add to cart
            </Button>
          </Stack>
        </GridItem>
      </Grid>
      <Stack justifyContent={"center"} alignItems={"center"} p={10}>
        <Text fontSize={"lg"} as={"b"} textAlign={"center"}>
          {product?.data?.name}
        </Text>
        <Text fontSize={"medium"} noOfLines={2} textAlign={"center"}>
          {product?.data?.description}
        </Text>
        <HStack>
          <Text fontSize={"medium"} noOfLines={2}>
            color: {product?.data?.color}
          </Text>
          <Text fontSize={"medium"} noOfLines={2}>
            material: {product?.data?.material}
          </Text>
        </HStack>
      </Stack>
    </Container>
  );
};

export default ProductDetail;
