import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext'; // Adjust the path as needed
import axios from 'axios';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // Replace with your backend's login endpoint
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password
            });
            login(response.data.token); // Use the login function from AuthContext
            // Redirect to home or another page as needed
        } catch (error) {
            // Handle the error case
            console.error('Login error:', error.response?.data || error.message);
        }
    };

    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        <div className="card-body text-center">
                            <svg className="mx-auto my-3 bi bi-person-circle" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                            <form onSubmit={handleLogin}>
                                <input
                                    type="text"
                                    className="form-control my-4 py-2"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                    type="password" 
                                    className="form-control my-4 py-2"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="text-center mt-3">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                                <div className="register-link">
                                <p>Don't have an account? <a href="/register">Register</a></p>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
