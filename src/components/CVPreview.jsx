import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import React from 'react';
import ColorPicker from './ColorPicker';

const profisciencyLevels = {
    "native": "Maternelle",
    "fluent": "Courant",
    "intermediary": "Intermédiaire",
    "beginner": "Débutant"
}

function CVPreview({ cvData, selectedFile, onChange }) {

    const styles = {
        backgroundColor: cvData.colors.primaryColor,
        color: cvData.colors.secondaryColor,
    };

    const divElement = document.getElementById('cv-container');

    const exportCVToImage = () => {

        html2canvas(divElement)
            .then(canvas => {
                canvas.toBlob(blob => {
                    saveAs(blob, 'Mon-CV-Pro.png');
                });
            })
            .catch(error => {
                console.error('Error exporting div to image:', error);
            });
    };

    const exportCVToWord = () => {
        //TODO: To be implemented
    }

    const exportCVToPDF = () => {

        html2canvas(divElement).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('Mon-CV-Pro.pdf');
        });
    };

    return (
        <div className="col-lg-8 col-md-12" style={{ backgroundColor: "#333" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <ColorPicker
                    colorType="primaryColor"
                    color={cvData.colors.primaryColor}
                    onChange={onChange}
                />
                <ColorPicker
                    colorType="secondaryColor"
                    color={cvData.colors.secondaryColor}
                    onChange={onChange}
                />

                <li className="ui simple dropdown item" style={{ float: 'right' }}>
                    <button
                        className="login-btn"
                        style={{ padding: "0px 20px", marginBottom: 20 }}
                    >
                        Exportation Du CV
                    </button>
                    <div className="menu dropdown_category5">
                        <a href="#"
                            onClick={exportCVToImage}
                            className="item channel_item"
                        >
                            En Image
                        </a>
                        <a href="#"
                            onClick={exportCVToPDF}
                            className="item channel_item"
                        >
                            En PDF
                        </a>
                    </div>
                </li>
            </div>
            <div className="cv-container" id='cv-container' style={styles}>
                <div className="left-column">
                    {selectedFile && (
                        <img className="portait" src={URL.createObjectURL(selectedFile)} width={100} height={100} />
                    )}
                    {!selectedFile && (
                        <img className="portait" src="/assets/images/hd_dp.jpg" />
                    )}
                    <div className="section">
                        <h3>À Propos De Moi</h3>
                        <p style={{ color: styles.color }}>{cvData.about ? cvData.about : "Aucune information enregistrée dans cette section pour le moment"}</p>
                    </div>
                    <div className="section">
                        <h3>Compétences</h3>
                        {
                            cvData.skills.length ?
                                (cvData.skills.map((skill) => (
                                    <ul>
                                        <li key={skill} style={{ color: styles.color }}>{skill}</li>
                                    </ul>
                                ))) : (
                                    <p style={{ color: styles.color }}>Aucune information enregistrée dans cette section pour le moment</p>
                                )
                        }
                    </div>
                    <div className="section">
                        <h3>Langues</h3>
                        {
                            cvData.languages.length ?
                                (cvData.languages.map(({ language, profisciency }) => (
                                    <ul >
                                        <li key={language}
                                            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                        >
                                            <p>{language}</p>
                                            <p>{"Niveau: "}{profisciencyLevels[profisciency]}</p>
                                        </li>
                                    </ul>
                                ))) : (
                                    <p style={{ color: styles.color }}>Aucune information enregistrée dans cette section pour le moment</p>
                                )
                        }
                    </div>
                    <div className="section">
                        <h3>Centres D'Intérêt</h3>
                        {
                            cvData.hobbies.length ?
                                (cvData.hobbies.map((hobby) => (
                                    <ul>
                                        <li key={hobby} style={{ color: styles.color }}>{hobby}</li>
                                    </ul>
                                ))) : (
                                    <p style={{ color: styles.color }}>Aucune information enregistrée dans cette section pour le moment</p>
                                )
                        }
                    </div>
                </div>
                <div className="right-column">
                    <div className="header">
                        <h2> <span className="text-uppercase">{cvData.name ? cvData.name : "Nom Défini Pour Le Moment"}</span></h2>
                        <p>{cvData.occupation}</p>
                        <ul className="infos">
                            <li><i className="icon fas fa-at text-blue" /> <a href="mailto:contact@pgomba.com">{cvData.email ? cvData.email : "Nom Défini Pour Le Moment"}</a></li>
                            <li><i className="icon fas fa-phone text-blue" /> {cvData.phone ? cvData.phone : "Nom Défini Pour Le Moment"}</li>
                            <li><i className="icon fas fa-map-marker-alt text-blue" /> {cvData.address ? cvData.address : "Nom Défini Pour Le Moment"}</li>
                            <li><i className="icon fas fa-calendar text-blue" /> {cvData.birthDate ? cvData.birthDate : "Nom Défini Pour Le Moment"}</li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="section">
                            <h3>Expériences <span className="text-blue">Professionelles</span></h3>
                            {
                                cvData.experiences.length ?
                                    (cvData.experiences.map((experience) => (
                                        <ul>
                                            <li key={experience.title} style={{ marginBottom: "1em" }}>
                                                <h4>{experience.title}{" - "}{experience.country}</h4>
                                                <p style={{ margin: 0 }}>{experience.company}</p>
                                                <p style={{ margin: 0 }}>{`${experience.startDate} - ${experience.endDate ? experience.endDate : "Présent"}`}</p>
                                                <p>{experience.description}</p>
                                            </li>
                                        </ul>
                                    ))) : (
                                        <p style={{ color: styles.color }}>Aucune information enregistrée dans cette section pour le moment</p>
                                    )
                            }
                        </div>
                        <div className="section">
                            <h3>Formations{" & "}<span className="text-blue">Education</span></h3>
                            {
                                cvData.education.length ?
                                    (cvData.education.map((experience) => (
                                        <ul>
                                            <li key={experience.title} style={{ marginBottom: "1em" }}>
                                                <h4>{experience.title}</h4>
                                                <p style={{ margin: 0 }}>{experience.country}</p>
                                                <p style={{ margin: 0 }}>{experience.university}</p>
                                                <p style={{ margin: 0 }}>{`${experience.startDate} - ${experience.endDate ? experience.endDate : "Présent"}`}</p>
                                                <p>{experience.description}</p>
                                            </li>
                                        </ul>
                                    ))) : (
                                        <p style={{ color: styles.color }}>Aucune information enregistrée dans cette section pour le moment</p>
                                    )
                            }
                        </div>
                        <div className="section">
                            <h3>Autres <span className="text-blue"> Informations</span></h3>
                            <p style={{ color: styles.color }}>{cvData.other ? cvData.other : "Aucune information enregistrée dans cette section pour le moment"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CVPreview;