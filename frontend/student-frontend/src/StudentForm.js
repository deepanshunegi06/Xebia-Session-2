import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        college: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/submit", formData);
            navigate("/display", { state: { formData } });
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };

    const formStyles = {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f4f7f6',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const labelStyles = {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#333',
    };

    const inputStyles = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
        backgroundColor: '#fff',
    };

    const inputFocusStyles = {
        outlineColor: '#005aab',
        borderColor: '#005aab',
    };

    const buttonStyles = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#4db848',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
    };

    const buttonHoverStyles = {
        backgroundColor: '#45a037',
    };

    const buttonActiveStyles = {
        backgroundColor: '#3e9232',
    };

    return (
        <form onSubmit={handleSubmit} style={formStyles}>
            <label style={labelStyles}>Enter your full name:</label>
            <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                style={inputStyles}
                onFocus={(e) => e.target.style = {...inputStyles, ...inputFocusStyles}}
                onBlur={(e) => e.target.style = inputStyles}
            />
            <label style={labelStyles}>Enter your age:</label>
            <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                style={inputStyles}
                onFocus={(e) => e.target.style = {...inputStyles, ...inputFocusStyles}}
                onBlur={(e) => e.target.style = inputStyles}
            />
            <label style={labelStyles}>Enter your college:</label>
            <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                style={inputStyles}
                onFocus={(e) => e.target.style = {...inputStyles, ...inputFocusStyles}}
                onBlur={(e) => e.target.style = inputStyles}
            />
            <button
                type="submit"
                style={buttonStyles}
                onMouseOver={(e) => e.target.style = {...buttonStyles, ...buttonHoverStyles}}
                onMouseOut={(e) => e.target.style = buttonStyles}
                onMouseDown={(e) => e.target.style = {...buttonStyles, ...buttonActiveStyles}}
                onMouseUp={(e) => e.target.style = {...buttonStyles, ...buttonHoverStyles}}
            >
                Submit
            </button>
        </form>
    );
}

export default StudentForm;
