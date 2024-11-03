import React, { useState } from 'react';
import './CustomInput.css';

const CustomInput = ({ placeholder, type, validate, value, handleChange, name }) => {
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.target;
        const errorMsg = validate(value);
        setError(errorMsg);
        handleChange(e);
    };

    return (
        <div className="custom-input-wrapper">
            <input
                className={`custom-input ${error ? 'error' : ''}`}
                placeholder={placeholder}
                type={type}
                value={value}
                name={name}
                onChange={handleInputChange}
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default CustomInput;
