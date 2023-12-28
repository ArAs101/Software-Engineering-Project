import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import Test from "./components/test";
import Register from "./components/Register";


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



    const navigateToRegisterPage = () => {
        //navigate("/register")
    }

  return (
    <div className="App">
      <Test/>
        <h2>................................................</h2>
        <a href="/register">
            <button>Register here</button>
            {/*will replace click event with ReactJS navigation...*/}
        </a>


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