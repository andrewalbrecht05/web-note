import React from 'react';
import './Register.css';
import CustomInput from '../../components/CustomInput/CustomInput';

function Register() {
    const validateUsername = (value) => {
        if (value.length < 3) return "Username must be at least 3 characters.";
        return "";
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Invalid email address.";
        return "";
    };

    const validatePassword = (value) => {
        if (value.length < 6) return "Password must be at least 6 characters.";
        return "";
    };

    return (
        <div className="register">
            <div className="container">
                <h1 className="register-text">Sign up</h1>
                <form className="register-form">
                    <CustomInput
                        placeholder="Username"
                        type="text"
                        validate={validateUsername}
                    />
                    <CustomInput
                        placeholder="E-mail"
                        type="email"
                        validate={validateEmail}
                    />
                    <CustomInput
                        placeholder="Password"
                        type="password"
                        validate={validatePassword}
                    />
                    <button className="register-button" type="submit">Register</button>
                </form>
                <p>
                    <a href="/login" className="register-text-link">
                        Have an account? Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;
