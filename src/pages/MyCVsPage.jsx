import React, { useEffect, useState } from 'react';
import { pdfjs } from "react-pdf";
import { useDispatch, useSelector } from 'react-redux';
import { CVFormAndPreview, CVList, CVPreview } from '../components';
import { deleteCVRequest, fetchCVs } from '../redux/actions/cvsActions';
import { emptyCV } from "../mock";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MyCVsPage() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentCVIndex, setCurrentCVIndex] = useState(0);

  const { cvs } = useSelector((state) => state.cvs);
  const loading = useSelector((state) => state.cvs.loading);
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);
  const [cvData, setCVData] = useState(cvs[currentCVIndex] || emptyCV);

  useEffect(() => {
    if (cvs.length) {
      setCVData(cvs[currentCVIndex]);
    }
  }, [cvs, currentCVIndex]);

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

  const handleDelete = (cvId) => {
    dispatch(deleteCVRequest({ cvId, token }));
  }

  const handleEdit = () => {
    setIsEditMode(true);
  }

  useEffect(() => {
    dispatch(fetchCVs(token));
  }, [token, dispatch]);

  return (
    <div className="sa4d25" style={{ marginBottom: 200 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="st_title"><i className="uil uil-apps" />{"Mes CV"}</h2>
          </div>

          <div className="container-fluid mt-15">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CVList
                cvs={cvs}
                onCVClick={setCurrentCVIndex}
                onDeleteClick={handleDelete}
                onEditClick={handleEdit}
              />
              {
                isEditMode ? (
                  <CVFormAndPreview
                    title="Modifier votre Curriculum Vitae"
                    cvData={cvData}
                    selectedFile={selectedFile}
                    isEditMode
                    handleFormChange={handleFormChange}
                    handleColorChange={handleColorChange}
                  />
                ) : (
                  <>
                    {
                      loading ? (
                        <p>Chargement...</p>
                      ) : (
                        <>
                          {
                            cvs.length !== 0 ? (
                              <CVPreview cvData={cvData} />
                            ) : (
                              <p>
                                Veuillez cliquer ici pour créer un nouveau  CV
                              </p>
                            )
                          }
                        </>
                      )
                    }
                  </>
                )
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MyCVsPage;
