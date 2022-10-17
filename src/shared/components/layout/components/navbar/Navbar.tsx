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
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CartItem,
  removeFromCart,
} from "../../../../reducers/cartSlice/cartSlice";
import { useUserInfoQuery } from "../../../../requests/useUserInfoQuery";

export const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const { data: userData } = useUserInfoQuery();

  const handleMenuClick = () => {
    if (userData) {
      return;
    }
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate(`/`);
  };

  const handleRemoveClick = (item: CartItem) => {
    dispatch(removeFromCart(item));
  };

  const handleItemClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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
      <Heading as="h6" size={"sm"} onClick={handleLogoClick} cursor={"pointer"}>
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
            Cart ({cart.items.length})
          </MenuButton>
          <MenuList minWidth="340px">
            <Stack paddingX={4} spacing={4}>
              {cart.items.length > 0 ? (
                <Stack spacing={4}>
                  <Stack spacing={4}>
                    {cart.items.map((item: CartItem) => (
                      <Stack borderBottom={"1px solid #e7e7e7"} paddingY={2}>
                        <HStack justifyContent={"flex-end"}>
                          <AiOutlineClose
                            onClick={() => handleRemoveClick(item)}
                          ></AiOutlineClose>
                        </HStack>
                        <HStack justifyContent={"space-between"}>
                          <Image src={item.productImg} width={"80px"} height={"80px"} objectFit={"cover"}></Image>
                          <Box>
                            <Text
                              as={"b"}
                              textAlign={"right"}
                              textDecoration={"underline"}
                              onClick={() => handleItemClick(item.productId)}
                              cursor={"pointer"}
                            >
                              {item.name}
                            </Text>
                            <Text textAlign={"right"}>Price: {item.price}</Text>
                            <Text textAlign={"right"}>
                              Amount: {item.amount}
                            </Text>
                          </Box>
                        </HStack>
                      </Stack>
                    ))}
                  </Stack>
                  <Text textAlign={"right"}>
                    Total Price: {cart.totalPrice}
                  </Text>
                </Stack>
              ) : (
                <Text
                  paddingY={4}
                  textAlign={"center"}
                  as={"b"}
                  color={"gray.600"}
                >
                  Empty cart
                </Text>
              )}
              <Button size={"lg"}>Check out</Button>
            </Stack>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton onClick={handleMenuClick}>
            {userData ? (
              <Avatar
                name={userData.name}
                src={userData.avatar}
                size={"sm"}
              ></Avatar>
            ) : (
              <Text>Login</Text>
            )}
          </MenuButton>
          {userData && (
            <MenuList>
              <MenuItem>My order</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          )}
        </Menu>
        )
      </HStack>
    </Container>
  );
};
