import React from "react";
import "./CreateNote.css";
import CustomInput from "../../components/CustomInput/CustomInput";

const CreateNote = () => {
    const folders = [
        { title: 'Personal' },
        { title: 'Work' },
        { title: 'Travel' },
        { title: 'Events' },
        { title: 'Finances' },
        { title: 'Shared' },
    ];
    const validateTitle = (value) => {
        return value.trim() === "" ? "Title cannot be blank." : "";
    };

    return (
        <div className="create-note">
            <div className="container">
                <h1 className="create-note-text">Create Note</h1>
                <form className="create-note-form">
                    <CustomInput
                        placeholder="Note Name"
                        type="text"
                        validate={validateTitle}
                    />
                    <select className="folder-selector">
                        {folders.map((folder, index) => (
                            <option key={index} value={folder.title}>
                                {folder.title}
                            </option>
                        ))}
                    </select>
                    <button className="create-note-button" type="submit">Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreateNote;
