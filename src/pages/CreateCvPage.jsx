import React, { useState } from 'react';
import { pdfjs } from "react-pdf";
import { emptyCV } from "../mock";
import { CVFormAndPreview } from "../components";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function CreateCvPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [cvData, setCVData] = useState(emptyCV);

  const handleFormChange = (event) => {
    if (event.target.type === 'file') {
      const file = event.target.files[0];
      setSelectedFile(file);
      return;
    }

    const { name, value } = event.target;
    setCVData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleColorChange = (colorType, color) => {
    setCVData({
      ...cvData,
      colors: { ...cvData.colors, [colorType]: color },
    });
  };

  return (
    <CVFormAndPreview title="Création De Curriculum Vitae Professionnel"
      cvData={cvData} handleColorChange={handleColorChange}
      selectedFile={selectedFile}
      handleFormChange={handleFormChange} />);
}
