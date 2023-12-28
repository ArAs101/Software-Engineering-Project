import React, {Component, useEffect, useState} from "react";

function Register() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/register');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const [data, setData] = useState("");
    return (
        <div className="App">
            <h2>Register page...</h2>
            {/*<h2>{data ? <p>{data.message}</p> : <p>Loading...</p>}</h2>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.</p>


                <a className="App-link" href="https://reactjs.org"
                   target="_blank" rel="noopener noreferrer">
                    Learn React</a>
            </header>*/}
        </div>
    );
}

export default Register