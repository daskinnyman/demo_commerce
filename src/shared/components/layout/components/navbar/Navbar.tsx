import {
  Container,
  HStack,
  Avatar,
  Heading,
  Menu,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useUserInfoQuery } from "../../../../requests/useUserInfoQuery";

export const Navbar = () => {
  const { data: userData } = useUserInfoQuery();
  return (
    <Container
      as="nav"
      minWidth={"container.xl"}
      paddingX={3}
      paddingY={2}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Heading as="h6" size={"sm"}>
        Demo Commerce
      </Heading>
      <HStack spacing={4}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={
              <AiOutlineShoppingCart size={24}></AiOutlineShoppingCart>
            }
          >
            Cart
          </MenuButton>
          <MenuList minWidth="340px">
            <Stack paddingX={4} spacing={4}>
              <Text paddingY={4} textAlign={"center"} as={"b"} color={"gray.600"}>Empty cart</Text>
              <Button size={"lg"}>Check out</Button>
            </Stack>
          </MenuList>
        </Menu>

        {userData && (
          <Avatar
            name={userData.name}
            src={userData.avatar}
            size={"sm"}
          ></Avatar>
        )}
      </HStack>
    </Container>
  );
};
