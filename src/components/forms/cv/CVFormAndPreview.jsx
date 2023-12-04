import CVForm from "../../CVForm"
import CVPreview from "../../CVPreview"

export default function CVFormAndPreview({
  cvData,
  handleFormChange,
  handleColorChange,
  title,
  selectedFile,
  isEditMode,
}) {
  return (
    <div className="sa4d25" style={{ marginBottom: 200 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="st_title">
              <i className="uil uil-apps" />{title}</h2>
          </div>

          <div className="container-fluid mt-15">
            <div className="row">
              <CVForm cvData={cvData} onChange={handleFormChange} />
              <CVPreview
                cvData={cvData}
                selectedFile={selectedFile}
                onChange={handleColorChange}
                isEditMode={isEditMode}
                canSave />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
