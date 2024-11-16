import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayData() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get("http://localhost:3001/students");
                setStudents(response.data);
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        };
        fetchStudents();
    }, []);

    const containerStyle = {
        padding: '20px',
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#f4f7f6',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        textAlign: 'center',
        color: '#333',
        fontSize: '24px',
        marginBottom: '20px',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    };

    const thStyle = {
        backgroundColor: '#4db848',
        color: '#fff',
        padding: '12px',
        textAlign: 'left',
        fontSize: '16px',
    };

    const tdStyle = {
        padding: '12px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
        fontSize: '14px',
    };

    const noDataStyle = {
        textAlign: 'center',
        fontSize: '18px',
        color: '#888',
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Submitted Data</h2>
            {students.length === 0 ? (
                <p style={noDataStyle}>No data found</p>
            ) : (
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Full Name</th>
                            <th style={thStyle}>Age</th>
                            <th style={thStyle}>College</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td style={tdStyle}>{student.fullName}</td>
                                <td style={tdStyle}>{student.age}</td>
                                <td style={tdStyle}>{student.college}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default DisplayData;
