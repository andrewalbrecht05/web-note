import React from "react";
import "./CreateFolder.css";
import CustomInput from "../../components/CustomInput/CustomInput";

const CreateFolder = () => {
    const validateTitle = (value) => {
        return value.trim() === "" ? "Title cannot be blank." : "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Additional submit logic here, if needed
        console.log("Folder submitted");
    };

    return (
        <div className="create-folder">
            <div className="container">
                <h1 className="create-folder-text">Create Folder</h1>
                <form className="create-folder-form" onSubmit={handleSubmit}>
                    <CustomInput
                        placeholder="Folder Title"
                        type="text"
                        validate={validateTitle}
                    />
                    <button className="create-folder-button" type="submit">
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateFolder;
