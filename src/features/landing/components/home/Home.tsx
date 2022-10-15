import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useUserInfoQuery } from "../../requests/useUserInfoQuery";
import { useProductListQuery } from "../../requests/useProductListQuery";
import {
  Container,
  Grid,
  Stack,
  Box,
  Avatar,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import ProductItem from "./components/productItem/ProductItem";
import backGroundImage from "./clark-young-ueZXMrZFFKQ-unsplash.jpeg";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Home() {
  const { data: userData } = useUserInfoQuery();
  const { data: productData } = useProductListQuery();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("login");
  };

  return (
    <>
      <Container
        as="nav"
        minWidth={"container.xl"}
        paddingX={3}
        paddingY={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text>Demo Commerce</Text>
        <HStack spacing={4}>
          <AiOutlineShoppingCart size={24}></AiOutlineShoppingCart>
          {userData && (
            <Avatar name={userData.name} src={userData.avatar} size={"sm"}></Avatar>
          )}
        </HStack>
      </Container>

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
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {productData?.data?.map((el) => (
            <ProductItem
              key={`${el.name}-${el.color}-${el.price}`}
              product={el}
            ></ProductItem>
          ))}
        </Grid>
        <button onClick={handleLogin}>Login</button>
      </Container>
    </>
  );
}

export default Home;
