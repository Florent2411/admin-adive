
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import CVForm from '../components/CVForm';
import CVPreview from '../components/CVPreview';
import CVExport from '../components/CVExport';


import { JsonForms } from "@jsonforms/react";
import { Document, Page, pdfjs } from "react-pdf";

import schema from "../json-schema/schema.json";
import uischema from "../json-schema//uischema.json";
import initial from "../json-schema//initial.json";
//import { materialCells, materialRenderers } from "@jsonforms/material-renderers";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 

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
        langue: '',
        colors: {
            primaryColor: '#000000',
            secondaryColor: '#FFFFFF',
        },
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

    const handleColorChange = (colorType, color) => {
        setCVData({
            ...cvData,
            colors: { ...cvData.colors, [colorType]: color },
        });
    };

    const savedData = localStorage.getItem("user");
    const initialData = !savedData ? initial : JSON.parse(savedData);
    const [displayDataAsString, setDisplayDataAsString] = useState("");
    const [jsonformsData, setJsonformsData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const onDismiss = () => setVisible(false);
    const [error, setError] = useState("");
    const [pdfBlob, setPdfBlob] = useState(null);
    const [numPages, setNumPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(jsonformsData, null, 2));
        setDisplayDataAsString(JSON.stringify(jsonformsData, null, 2));
    }, [jsonformsData]);

    const clearData = () => { 
        setJsonformsData({});
    };

    const downloadObject = async () => {
        if (typeof error === "undefined" || error.trim().length === 0) {
            setVisible(false);
            setLoading(true);
            try {
                const response = await fetch("/api/v1/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: displayDataAsString,
                });
                if (!response.ok) {
                    const text = await response.json();
                    throw new Error(text.message);
                }
                const data = await response.blob();
                setPdfBlob(data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setVisible(true);
                setErrorMessage(err.message);
            }
        } else {
            setVisible(true);
            setErrorMessage(error);
        }
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, numPages));
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        if (pdfBlob != null) {
            link.href = window.URL.createObjectURL(pdfBlob);
            link.download = `${jsonformsData.personal_info.name} Resume.pdf`;
            link.click();
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

                    <div className="col-lg-12 col-md-12">
                        <div className="sign_form" style={{ padding: 20, display: "flex", justifyContent: "space-between" }}>
                            <img src="/assets/images/cv-templates/template_1.png" width={"10%"} style={{ height: 150 }} alt />
                            <img src="/assets/images/cv-templates/template_2.png" width={"10%"} style={{ height: 150 }} alt />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12" style={{ marginTop: 10 }}>
                        <div className="col-lg-6 col-md-6">
                            <div>
                                <JsonForms
                                    schema={schema}
                                    uischema={uischema}
                                    data={jsonformsData}
                                    //renderers={materialRenderers}
                                    //cells={materialCells}
                                    onChange={({ errors, data }) => {
                                        setJsonformsData(data);
                                        setError(
                                            errors?.map((err) => err.message)[errors.length - 1]
                                        );
                                    }}
                                /> 
                            </div>
                            <Button
                                className="resetbutton"
                                onClick={downloadObject}
                                color="primary"
                                variant="contained"
                            >
                                Create your resume
                            </Button>
                            &nbsp;
                            <Button
                                className="resetbutton"
                                onClick={clearData}
                                color="primary"
                                variant="contained"
                            >
                                Clear data
                            </Button>
                        </div>
                        <div className="col-lg-6 col-md-6">

                        </div>
                    </div>
                    <div className="container-fluid mt-15">
                        <div className="row">
                            <CVForm cvData={cvData} onChange={handleFormChange} />
                            <CVPreview cvData={cvData} selectedFile={selectedFile} onChange={handleColorChange} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CreateCvPage;