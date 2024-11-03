import React, { useState } from "react";
import "./Login.css";
import CustomInput from "../../components/CustomInput/CustomInput";
import {Link, Navigate, useNavigate} from "react-router-dom";
import { handleUserLogin } from "../../api/authApi";
import {useAuth} from "../../context/AuthContext";

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const {isLoggedIn, setIsLoggedIn} = useAuth();
    const navigate = useNavigate();

    console.log("IsLoggedIn:", isLoggedIn);
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") setName(value);
        if (name === "password") setPassword(value);
    };

    const validateUsername = (value) => {
        return value.length < 3 ? "Username must be at least 3 characters." : "";
    };

    const validatePassword = (value) => {
        return value.length < 6 ? "Password must be at least 6 characters." : "";
    };

    const handleSubmit = async (e) => {
        console.log({ name, password });
        e.preventDefault();
        const data = await handleUserLogin({ name, password });
        console.log(data);
        if (data.status === "success") {
            localStorage.setItem("token", data.token);
            setIsLoggedIn(true);
            navigate('/');
        }
    };

    if( isLoggedIn ) {
        return <Navigate to={'/'}/>
    }

    return (
        <div className="login">
            <div className="container">
                <h1 className="login-text">Sign In</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <CustomInput
                        placeholder="Username"
                        type="text"
                        validate={validateUsername}
                        value={name}
                        name="name"
                        handleChange={handleChange}
                    />
                    <CustomInput
                        placeholder="Password"
                        type="password"
                        validate={validatePassword}
                        value={password}
                        name="password"
                        handleChange={handleChange}
                    />
                    <button className="login-button" type="submit">Login</button>
                    <p>
                        <Link to="/register" className="register-link">
                            Don't have an account? Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
