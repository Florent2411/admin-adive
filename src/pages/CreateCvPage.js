
import React, { useState } from 'react';
import CVForm from '../components/CVForm';
import CVPreview from '../components/CVPreview';
import CVExport from '../components/CVExport';

function CreateCvPage() {

    const [cvData, setCVData] = useState({
        name: '',
        occupation: '',
        email: '',
        phone: '',
        address: '',
        picture: '',
        about: '',
        skills: '',
        hobbies: '',
        experiences: '',
        birthDate: '',
        education: '',
        other: '',
        langue: ''
    });

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFormChange = (event) => {
        if (event.target.type === 'file') {
            const file = event.target.files[0];
            setSelectedFile(file);
        } else {
            const { name, value } = event.target;
            setCVData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    return (
        <div className="sa4d25" style={{ marginBottom: 200 }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="st_title">
                            <i className="uil uil-apps" />
                            Création De Curriculum Vitae Professionnel</h2>
                        {/* <CVExport cvData={cvData} /> */}
                    </div>


                    <div className="container-fluid mt-15">
                        <div className="row">
                            <CVForm cvData={cvData} onChange={handleFormChange} />
                            <CVPreview cvData={cvData} selectedFile={selectedFile} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CreateCvPage;