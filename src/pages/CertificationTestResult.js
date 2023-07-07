import React from 'react';
import { useNavigate } from 'react-router-dom';

function CertificationTestResult() {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <div className="_215b15" style={{ marginTop: -30 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title126">
                                    <h2>Resultats</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq1256" style={{ marginBottom: 200 }}>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-6">
                                <div className="certi_form rght1528">
                                    <div className="test_result_bg">
                                        <ul className="test_result_left">
                                            <li>
                                                <div className="result_dt">
                                                    <i className="uil uil-check right_ans" />
                                                    <p>Correct<span>(3)</span></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="result_dt">
                                                    <i className="uil uil-times wrong_ans" />
                                                    <p>Incorrect<span>(1)</span></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="result_dt">
                                                    <h4>3</h4>
                                                    <p>Sur 4</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="result_content">
                                            <h2>Félicitations ! Julien</h2>
                                            <p>Vous avez réussi à la certification</p>
                                            <a href="/assets/images/certificate.jpg"
                                                className="download_btn" download="w3logo" target="_blank">
                                                Télégarger La Certification
                                            </a>
                                            <button className="btn_buy" onClick={() => {
                                                navigate("/trainings")
                                            }}>Retour Aux Formations</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CertificationTestResult;