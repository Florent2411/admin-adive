import React from 'react';
import { useNavigate } from 'react-router-dom';

function CertificationCenter() {

    const navigate = useNavigate();

    return (
        <>
            <div className="_215certibg" style={{ marginTop: -30, marginBottom: 200 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cert_banner_text">
                                <h1>Centre De Certification</h1>
                                {/* <p>For Students and Instructors</p> */}
                                <ul className="certi_icons">
                                    <li><a href="#" className="edttslogo"><img src="/assets/images/adiveLogo.png" alt /></a></li>
                                    <li><div className="edttsplus"><img src="/assets/images/cerificate_center/plus.svg" alt /></div></li>
                                    <li><a href="#" className="edttslogo1"><img src="/assets/images/cerificate_center/certicon.svg" alt /></a></li>
                                </ul>
                                <button className="certi-btn" onClick={() => {
                                    navigate("/certification-test")
                                }}>Commencer La Certification</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CertificationCenter;