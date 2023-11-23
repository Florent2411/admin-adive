import React, { useEffect, useState } from 'react';
import { pdfjs } from "react-pdf";
import { useDispatch, useSelector } from 'react-redux';
import CVPreview from '../components/CVPreview';
import { fetchCVs } from '../redux/actions/cvsActions';

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
                        <div style={{ display: "flex" , justifyContent: "space-between"}}>
                            <ul>
                                {cvs.map((item) => (
                                    <li key={item.id} >
                                        <button>{`CV #${item.id} --- ${item.occupation}`}</button>
                                    </li>
                                ))}
                            </ul>
                            {
                                loading ? (
                                    <p>Chargement...</p>
                                ) : (
                                    <CVPreview cvData={cvData} />
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