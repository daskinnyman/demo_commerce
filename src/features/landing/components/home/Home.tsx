import logo from "./logo.svg";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useUserInfoQuery } from "../../requests/useUserInfoQuery";
import { useEffect } from "react";
import { httpClient } from "../../../../shared/utils/httpClient";

function Home() {
  const { data: userData, isLoading } = useUserInfoQuery();
  const navigate = useNavigate();
  useEffect(() => {
    httpClient
      .get("api/products")
      .then((el) => el.data)
      .then((data) => console.log(data));
  }, []);

  const handleLogin = () => {
    navigate("login");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {userData && <p>{userData.name}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={handleLogin}>Login</button>
      </header>
    </div>
  );
}

export default Home;
