import "./Home.scss";
import { useProductListQuery } from "../../requests/useProductListQuery";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import ProductItem from "./components/productItem/ProductItem";
import { Jumbotron } from "./components/jumbotron/Jumbotron";
import { useProductColorQuery } from "../../requests/useProductColorQuery";
import {
  AiOutlineClear,
  AiOutlineInbox,
  AiOutlineSearch,
} from "react-icons/ai";
import { useState } from "react";

function Home() {
  const [queryParam, setQueryParam] = useState<any>(null);
  const { data: productData } = useProductListQuery(queryParam);
  const { data: colors } = useProductColorQuery();
  const [selectedColor, setSelectedColor] = useState("");
  const [priceRange, setPriceRange] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleColorSelect = (color: string) => {
    if (color === selectedColor) {
      setSelectedColor("");
      return;
    }
    setSelectedColor(color);
  };

  const handleFilterSet = () => {
    setQueryParam({
      color: selectedColor,
      price: priceRange,
    });
  };

  const handleReset = () => {
    setSelectedColor("");
    setPriceRange(9999);
    setQueryParam(null);
  };

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
                <HStack justifyContent={"space-between"}>
                  <Text marginBottom={2}>Product color</Text>
                  <Text color={selectedColor}>{selectedColor}</Text>
                </HStack>
                <SimpleGrid columns={5} spacing={1}>
                  {colors?.data?.map((color: string) => (
                    <Box
                      key={color}
                      bg={color}
                      border={"2px"}
                      cursor={"pointer"}
                      borderColor={
                        selectedColor === color
                          ? "blackAlpha.600"
                          : "blackAlpha.100"
                      }
                      height={"45px"}
                      width={"45px"}
                      onClick={() => handleColorSelect(color)}
                    ></Box>
                  ))}
                </SimpleGrid>
              </Box>
              <Box>
                <HStack justifyContent={"space-between"}>
                  <Text>Price</Text>
                  <Text>$ {priceRange}</Text>
                </HStack>
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={0}
                  value={priceRange}
                  min={0}
                  max={9999}
                  onChange={(v) => setPriceRange(v)}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <Tooltip
                    hasArrow
                    bg={"blue.500"}
                    color="white"
                    placement="top"
                    isOpen={showTooltip}
                    label={`$${priceRange}`}
                  >
                    <SliderThumb />
                  </Tooltip>
                </Slider>
              </Box>
              <Button
                leftIcon={<AiOutlineSearch></AiOutlineSearch>}
                colorScheme="blue"
                onClick={handleFilterSet}
              >
                Search
              </Button>
              <Button
                leftIcon={<AiOutlineClear></AiOutlineClear>}
                onClick={handleReset}
              >
                Reset
              </Button>
            </Stack>
          </GridItem>
          <GridItem area={"content"} minH={"500px"}>
            {!productData?.data?.length ? (
              <Flex  justifyContent={"center"} height={"100%"} width={"100%"}>
                <Center flexDirection={"column"} >
                  <AiOutlineInbox size={40}></AiOutlineInbox>
                  <Heading as={"h6"} size={"sm"}>
                    No Products
                  </Heading>
                </Center>
              </Flex>
            ) : (
              <Grid templateColumns="repeat(3, 1fr)" gap={4} >
                {productData?.data?.map((el) => (
                  <ProductItem
                    key={`${el.name}-${el.color}-${el.price}`}
                    product={el}
                  ></ProductItem>
                ))}
              </Grid>
            )}
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
