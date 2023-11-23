import React from 'react';

function CVExport({ cvData }) {

    const handleExport = () => {
        alert('Exporting CV:', cvData);
    };

    return (
        <button
            className="login-btn"
            onClick={handleExport}
            style={{ width: 100, float: 'right' }}
        >
            Export CV
        </button>
    );
}

export default CVExport;