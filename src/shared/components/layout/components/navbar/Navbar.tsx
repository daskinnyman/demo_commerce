import { Container, HStack, Avatar, Heading } from "@chakra-ui/react";
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
      <Heading as="h6" size={"sm"}>Demo Commerce</Heading>
      <HStack spacing={4}>
        <AiOutlineShoppingCart size={24}></AiOutlineShoppingCart>
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
