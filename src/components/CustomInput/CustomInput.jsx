import React, { useState } from 'react';
import './CustomInput.css';

const CustomInput = ({ placeholder, type, validate }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        if (validate) {
            const errorMessage = validate(newValue);
            setError(errorMessage);
        }
    };
    return (
        <div className="custom-input-wrapper">
            <input
                className={`custom-input ${error ? 'error' : ''}`}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={handleChange}
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default CustomInput;
