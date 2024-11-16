import React, { useEffect } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../api/apiConfig";

const ProtectedRoutes = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;

                const response = await axiosInstance.get("/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                const data = response.data;
                if (data.status === "success") {
                    console.log(isLoggedIn);
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
                console.log(isLoggedIn);
            } catch (error) {
                console.log("Get user error:", error);
                setIsLoggedIn(false); // Ensure isLoggedIn is false if there’s an error
            }
        };

        if (!isLoggedIn) { // Only check authentication if not already logged in
            checkAuth();
        }
    }, [isLoggedIn, setIsLoggedIn]); // Adding setIsLoggedIn and isLoggedIn as dependencies

    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    );
};

export default ProtectedRoutes;
