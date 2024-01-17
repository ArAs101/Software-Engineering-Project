import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mail, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        // console.log for testing
        console.log({
            username: username,
            mail: mail,
            phone: phone,
            password: password,
        });

        try {
            // Replace with your backend's register endpoint
            await axios.post('http://localhost:4000/register', {
                username: username,
                mail: mail,
                phone: phone,
                password: password
            });
            // Handle registration success (e.g., redirect to login page or display success message)
        } catch (error) {
            // Handle registration error
            console.error('Registration error:', error.response?.data || error.message);
        }
    };

    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        <div className="card-body text-center">
                            {/* SVG and other static content */}
                            <form onSubmit={handleRegister}>
                                <input
                                    type="text"
                                    className="form-control my-4 py-2"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                        
                                <input
                                    type="email"
                                    className="form-control my-4 py-2"
                                    placeholder="Email"
                                    value={mail}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="tel"
                                    className="form-control my-4 py-2"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                 <input
                                    type="password"
                                    className="form-control my-4 py-2"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="text-center mt-3">
                                    <button type="submit" className="btn btn-primary">Register</button>
                                    {/* Link to login */}
                                </div>
                                <div>Already have an account? <a href="/login">Login</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
