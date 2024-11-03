import React, {useState} from "react";
import "./CreateFolder.css";
import CustomInput from "../../components/CustomInput/CustomInput";
import {handleCreateFolder} from "../../api/folderApi";
import {useNavigate} from "react-router-dom";

const CreateFolder = () => {
    const [name, setName] = useState();
    const navigate = useNavigate();
    const validateTitle = (value) => {
        return value.trim() === "" ? "Title cannot be blank." : "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await handleCreateFolder({name});
            alert("Папку успішно створено!");
            navigate('/');
        } catch (e) {
            alert("Не вдалося створити папку! Спробуйте ще раз.")
        }
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
                        value={name}
                        handleChange={(e) => {setName(e.target.value)}}
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
