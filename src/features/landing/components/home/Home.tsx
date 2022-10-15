import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useProductListQuery } from "../../requests/useProductListQuery";
import {
  Container,
  Grid,
  Stack,
  Box,
  Text,
  Button,
  GridItem,
} from "@chakra-ui/react";
import ProductItem from "./components/productItem/ProductItem";
import backGroundImage from "./clark-young-ueZXMrZFFKQ-unsplash.jpeg";

function Home() {
  const { data: productData } = useProductListQuery();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("login");
  };

  return (
    <>
      <Box
        height={550}
        width={"100%"}
        backgroundImage={backGroundImage}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      >
        <Stack
          backgroundColor={"blackAlpha.400"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
          spacing={4}
        >
          <Text fontSize={"3xl"} as={"b"} color={"white"} textAlign={"center"}>
            Your desired product,
            <br /> All in here!
          </Text>
          <Button>Go Shopping</Button>
        </Stack>
      </Box>

      <Container minWidth={"container.xl"} paddingTop={8}>
        <Grid
          templateColumns={'250px 1fr'}
          gap={4}
          templateAreas={`
                  "sidebar content"
                 `}
        >
          <GridItem area={"sidebar"}>2222</GridItem>
          <GridItem area={"content"}>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              {productData?.data?.map((el) => (
                <ProductItem
                  key={`${el.name}-${el.color}-${el.price}`}
                  product={el}
                ></ProductItem>
              ))}
            </Grid>
          </GridItem>
        </Grid>

        <button onClick={handleLogin}>Login</button>
      </Container>
    </>
  );
}

export default Home;
