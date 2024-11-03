import React, {useState} from "react";
import "./CreateNote.css";
import CustomInput from "../../components/CustomInput/CustomInput";
import {getAllFolders, handleCreateFolder} from "../../api/folderApi";
import {handleCreateNote} from "../../api/noteApi";
import useFetch from "../../hooks/useFetch";
import {useNavigate} from "react-router-dom";

const CreateNote = () => {
    const {data: foldersData, isLoading, refetch: updateFolders} = useFetch(getAllFolders);
    const [name, setName] = useState();
    const navigate = useNavigate();
    if( !foldersData ) {
        return null;
    }

    const validateTitle = (value) => {
        return value.trim() === "" ? "Title cannot be blank." : "";
    };

    const handleSubmit = async (event, updateIsLoggedIn) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.append("text", "");
        try {
            const response = await handleCreateNote(formData);
            alert("Нотатку успішно створено!");
            navigate('/');
        } catch (e) {
            alert("Не вдалося створити нотатку! Спробуйте ще раз.")
        }
    };


    return (
        <div className="create-note">
            <div className="container">
                <h1 className="create-note-text">Create Note</h1>
                <form className="create-note-form" onSubmit={handleSubmit}>
                    <CustomInput
                        placeholder="Note Name"
                        type="text"
                        validate={validateTitle}
                        name={"title"}
                        value={name}
                        handleChange={(e) => {setName(e.target.value)}}
                    />
                    <select className="folder-selector" name="folder_id">
                        {foldersData.data.folders.map((folder, index) => (
                            <option key={index} value={folder.id}>
                                {folder.name}
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
