import React, { useEffect, useState } from 'react';
import { pdfjs } from "react-pdf";
import { useDispatch, useSelector } from 'react-redux';
import CVPreview from '../components/CVPreview';
import DateTimeTool from "../libs/datetime";
import { deleteCVRequest, fetchCVs } from '../redux/actions/cvsActions';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const placeHolderCV = {
    name: '',
    occupation: '',
    email: '',
    phone: '',
    address: '',
    picture: '',
    about: '',
    skills: [],
    hobbies: [],
    experiences: [],
    birthDate: '',
    education: [],
    other: '',
    languages: [],
    colors: {
        primaryColor: '#000000',
        secondaryColor: '#FFFFFF',
    },
}

function MyCVsPage() {
    const { cvs } = useSelector((state) => state.cvs);
    const loading = useSelector((state) => state.cvs.loading);
    const token = useSelector((state) => state.auth.token);

    const dispatch = useDispatch();

    const [currentCVIndex, setCurrentCVIndex] = useState(0);
    const cvData = cvs[currentCVIndex] || placeHolderCV;

    const handleDelete = (cvId) => {
        dispatch(deleteCVRequest({ cvId, token }));
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
                            <div >
                                <table class="table ucp-table">
                                    <thead class="thead-s">
                                        <tr>
                                            <th class="text-center" scope="col">ID</th>
                                            <th>Poste</th>
                                            <th class="text-center" scope="col">Créé le</th>
                                            <th class="text-center" scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cvs.map((item, index) => (
                                            <tr onClick={() => setCurrentCVIndex(index)} key={item.id}>
                                                <td class="text-center">{item.id}</td>
                                                <td>{item.occupation}</td>
                                                <td>{DateTimeTool(item.createdAt).format("D/M/YY")}</td>
                                                <td class="text-center">
                                                    <a class="gray-s"><i class="uil uil-edit-alt"></i></a>
                                                    <a onClick={() => handleDelete(item.id)} class="gray-s"><i class="uil uil-trash-alt"></i></a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {
                                loading ? (
                                    <p>Chargement...</p>
                                ) : (
                                    <>
                                        {
                                            cvs.length !== 0 && (
                                                <CVPreview cvData={cvData} />
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