import React from "react";
import "./Login.css";
import CustomInput from "../../components/CustomInput/CustomInput";

const Login = () => {
    const validateUsername = (value) => {
        if (value.length < 3) return "Username must be at least 3 characters.";
        return "";
    };

    const validatePassword = (value) => {
        if (value.length < 6) return "Password must be at least 6 characters.";
        return "";
    };

    return (
        <div className="login">
            <div className="container">
                <h1 className="login-text">Sign In</h1>
                <form className="login-form">
                    <CustomInput
                        placeholder="Username"
                        type="text"
                        validate={validateUsername}
                    />
                    <CustomInput
                        placeholder="Password"
                        type="password"
                        validate={validatePassword}
                    />
                    <button className="login-button" type="submit">Login</button>
                    <p>
                        <a href="/register" className="register-link">
                            Don't have an account? Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
