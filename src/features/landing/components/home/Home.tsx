import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useUserInfoQuery } from "../../requests/useUserInfoQuery";
import { useProductListQuery } from "../../requests/useProductListQuery";
import { Container, Grid } from "@chakra-ui/react";
import ProductItem from "../productItem/ProductItem";

function Home() {
  const { data: userData } = useUserInfoQuery();
  const { data: productData } = useProductListQuery();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("login");
  };

  return (
    <Container minWidth={'container.lg'}>
      {userData && <p>{userData.name}</p>}
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {productData?.data?.map((el) => (
          <ProductItem
            key={`${el.name}-${el.color}-${el.price}`}
            product={el}
          ></ProductItem>
        ))}
      </Grid>
      <button onClick={handleLogin}>Login</button>
    </Container>
  );
}

export default Home;
