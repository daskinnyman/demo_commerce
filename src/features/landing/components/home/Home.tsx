import "./Home.scss";
import { useProductListQuery } from "../../requests/useProductListQuery";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import ProductItem from "./components/productItem/ProductItem";
import { Jumbotron } from "./components/jumbotron/Jumbotron";
import { useProductColorQuery } from "../../requests/useProductColorQuery";
import { AiOutlineClear, AiOutlineSearch } from "react-icons/ai";

function Home() {
  const { data: productData } = useProductListQuery();
  const { data: colors } = useProductColorQuery();
  return (
    <>
      <Jumbotron />
      <Container minWidth={"container.xl"} paddingTop={8}>
        <Grid
          templateColumns={"250px 1fr"}
          gap={12}
          templateAreas={`
                  "sidebar content"
                 `}
        >
          <GridItem area={"sidebar"}>
            <Stack spacing={4}>
              <Heading as="h6" size={"md"}>
                Search by
              </Heading>
              <Box>
                <Text>Product color</Text>
                <SimpleGrid columns={5} spacing={1}>
                  {colors?.data?.map((color: string) => (
                    <Box bg={color} height={"45px"} width={"45px"}></Box>
                  ))}
                </SimpleGrid>
              </Box>
              <Box>
                <Text>Price</Text>
                <Slider aria-label="slider-ex-1" defaultValue={30}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
              <Button
                leftIcon={<AiOutlineSearch></AiOutlineSearch>}
                colorScheme="blue"
              >
                Search
              </Button>
              <Button leftIcon={<AiOutlineClear></AiOutlineClear>}>
                Reset
              </Button>
            </Stack>
          </GridItem>
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
      </Container>
    </>
  );
}

export default Home;
