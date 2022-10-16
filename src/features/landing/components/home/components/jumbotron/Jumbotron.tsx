import { Stack, Box, Text, Button, Heading } from "@chakra-ui/react";

import backGroundImage from "./clark-young-ueZXMrZFFKQ-unsplash.jpeg";

export const Jumbotron = () => {
  return (
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
        <Heading size={"lg"} as={"h3"} color={"white"} textAlign={"center"}>
          Your desired product,
          <br /> All in here!
        </Heading>
        <Button colorScheme="blue">Go Shopping</Button>
      </Stack>
    </Box>
  );
};
