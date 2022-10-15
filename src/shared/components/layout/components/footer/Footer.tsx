import { Container, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Container
      as="footer"
      minWidth={"container.xl"}
      paddingX={3}
      paddingY={2}
    >
      <Text textAlign={"center"}>© Copyright 2022 Alex chen, All rights reserved.</Text>
    </Container>
  );
};
