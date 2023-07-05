
import React from "react";
import CountUp from 'react-countup';

function DashboardPage() {
    return (
        <div className="sa4d25" style={{marginBottom: 0}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="st_title"><i className="uil uil-apps" /> Tableau De Bord Client</h2>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="card_dash">
                            <div className="card_dash_left">
                                <h5>Mes Emplois</h5>
                                <h2><CountUp end={5} duration={7} className="count" /></h2>
                                <span className="crdbg_1">Détails</span>
                            </div>
                            <div className="card_dash_right">
                                <img src="/assets/images/dashboard/achievement.svg" alt />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="card_dash">
                            <div className="card_dash_left">
                                <h5>Mes Formations</h5>
                                <h2><CountUp end={3} duration={7} className="count" /></h2>
                                <span className="crdbg_2">Détails</span>
                            </div>
                            <div className="card_dash_right">
                                <img src="/assets/images/dashboard/graduation-cap.svg" alt />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="card_dash">
                            <div className="card_dash_left">
                                <h5>Mes Certifications</h5>
                                <h2><CountUp end={1} duration={7} className="count" /></h2>
                                <span className="crdbg_3">Détails</span>
                            </div>
                            <div className="card_dash_right">
                                <img src="/assets/images/dashboard/online-course.svg" alt />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="card_dash">
                            <div className="card_dash_left">
                                <h5>Mes Souscriptions</h5>
                                <h2><CountUp end={3} duration={7} className="count" /></h2>
                                <span className="crdbg_4">Détails</span>
                            </div>
                            <div className="card_dash_right">
                                <img src="/assets/images/dashboard/knowledge.svg" alt />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="card_dash">
                            <div className="card_dash_left">
                                <h5>Mes Cvs</h5>
                                <h2><CountUp end={2} duration={7} className="count" /></h2>
                                <span className="crdbg_3">Détails</span>
                            </div>
                            <div className="card_dash_right">
                                <img src="/assets/images/dashboard/achievement.svg" alt />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="card_dash">
                            <div className="card_dash_left">
                                <h5>Services</h5>
                                <h2><CountUp end={8} duration={7} className="count" /></h2>
                                <span className="crdbg_1">Détails</span>
                            </div>
                            <div className="card_dash_right">
                                <img src="/assets/images/dashboard/graduation-cap.svg" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;