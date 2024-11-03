import axiosInstance from "./apiConfig";

export const handleCreateFolder = async (folderData) => {
    try {
        console.log(folderData);
        const response = await axiosInstance.post("/folders/create", folderData);
        return response.data;
    } catch (error) {
        console.error("Create folder error:", error);
        return { error: error.response?.data || "Failed to create folder" };
    }
};

export const getAllFolders = async () => {
    try {
        const response = await axiosInstance.get("/folders");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Get all folders error:", error);
        return { error: error.response?.data || "Failed to fetch folders" };
    }
};
