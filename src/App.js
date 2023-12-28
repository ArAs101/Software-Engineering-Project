import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import Test from "./components/test";
import ReactDOM from "react-dom/client";
import Register from "./components/Register";
import {Routes, Route, useNavigate} from "react-router-dom";

function App() {

/*  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);*/
const navigate = useNavigate()

    const navigateToRegisterPage = () => {
      navigate(Register)
    }

  return (
    <div className="App">
      <Test/>
        <h2>................................................</h2>
        <button onClick={navigateToRegisterPage}>Register here</button>
        <Routes>
            <Route path={Register}/>
        </Routes>
        {/*<Register/>*/}


      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;