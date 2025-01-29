import React, { useState } from 'react';

import axios from ' axios';
import '../../src/css/Signup.css'; 

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = () => {
        // e.preventDefault();
        console.log("Signup successful!");

        const req =await axios.post("http://localhost:3000/signup" {

            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: password,
        });

        console.log(req);
        navigate(./login.html);
        // Placeholder logic for signup
        // if (firstName && lastName && userName && email && password) {
        //     alert('Signup successful!');
        //     console.log({
        //         firstName,
        //         lastName,
        //         userName,
        //         email,
        //         password,
        //     });
        // } else {
        //     setError('Please fill in all fields.');
        // }
    };
    

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">Create an Account</h2>
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter your first name"
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter your last name"
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="userName" className="form-label">Username:</label>
                        <input
                            type="text"
                            id="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter your username"
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            className="form-input"
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="signup-button">Signup</button>
                </form>
                <div className="login-option">
                    <p>
                        Already have an account?{' '}
                        <a href="/login" className="login-link">Login here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
