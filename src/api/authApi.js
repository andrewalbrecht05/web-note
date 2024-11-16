import axiosInstance from "./apiConfig";

export const handleUserRegister = async (userData) => {
    try {
        const response = await axiosInstance.post("/auth/register", userData);
        return response.data;
    } catch (error) {
        console.error("Registration error:", error);
        return {error: error.response?.data || "Registration failed"};
    }
};

export const handleUserLogin = async (userData) => {
    try {
        console.log("Here");
        const response = await axiosInstance.post("/auth/login", userData);
        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        return {error: error.response?.data || "Login failed"};
    }
};

export const handleUserLogout = async (navigate, setIsLoggedIn) => {
    try {
        localStorage.setItem("token", undefined);
        setIsLoggedIn(false);
        navigate("/login");
    } catch (error) {
        console.error("Logout error:", error);
    }
};

export const getCurrentUser = async () => {
    try {
        const token = localStorage.getItem("token");

        if (!token) {
            return;
        }

        const response =  await axiosInstance.get("/auth/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        return response.data;
    } catch (error) {
        console.log("Get user error:", error);
    }
};
