import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./Home.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("api/reminders")
      .then((el) => el.data)
      .then((data) => console.log(data));

    axios.get("api/reminders/1")
      .then((el) => el.data)
      .then((data) => console.log(data));
  }, []);


  const handleLogin = () => {
    navigate("login")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
