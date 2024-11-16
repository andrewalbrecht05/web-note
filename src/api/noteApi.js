import axiosInstance from "./apiConfig";

export const handleCreateNote = async (noteData) => {
    try {
        const response = await axiosInstance.post("/notes/create", noteData);
        return response.data;
    } catch (error) {
        console.error("Create note error:", error);
        return { error: error.response?.data || "Failed to create note" };
    }
};

export const getNotesInFolder = async (folderId) => {
    try {
        const response = await axiosInstance.get(`/notes/all/${folderId}`);
        return response.data;
    } catch (error) {
        console.error("Get notes error:", error);
        return { error: error.response?.data || "Failed to fetch notes" };
    }
};

export const getNote = async (noteId) => {
    try {
        const response = await axiosInstance.get(`/notes/${noteId}`);
        return response.data;
    } catch (error) {
        console.error("Get note error:", error);
        return { error: error.response?.data || "Failed to fetch note" };
    }
};

export const handleUpdateNote = async (noteId, updateData) => {
    try {
        const response = await axiosInstance.patch(`/notes/${noteId}`, updateData);
        return response.data;
    } catch (error) {
        console.error("Update note error:", error);
        return { error: error.response?.data || "Failed to update note" };
    }
};

export const handleDeleteNote = async (noteId) => {
    try {
        const response = await axiosInstance.delete(`/notes/${noteId}`);
        return response.data;
    } catch (error) {
        console.error("Delete note error:", error);
        return { error: error.response?.data || "Failed to delete note" };
    }
};
