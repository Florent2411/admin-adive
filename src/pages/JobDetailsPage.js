import React, { useState, useEffect } from "react";
import { Avatar } from 'antd';
import { connect } from 'react-redux';
import { selectJob, fetchJobs } from '../redux/actions/jobsActions';
import { useParams } from 'react-router-dom';
import Job from '../components/Job';
import Skelet from '../components/Skeleton';

function JobDetailsPage({ selectedJob, selectJob, jobs, fetchJobs, loading }) {
    console.log(selectedJob)
    //console.log(selectJob)
    const { id } = useParams();
    //const { loading, jobs, fetchJobs } = props;


    useEffect(() => {
        selectJob(id);
    }, [id, selectJob]);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);


    return (
        <div style={{ marginBottom: 550 }}>
            <div className="sa4d25">
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-md-10">
                            <div className="section3125 rpt145">
                                <div className="row">
                                    <div className="col-lg-10">
                                        <a href="#" className="_216b22">
                                            <span><i className="uil uil-windsock" /></span>
                                        </a>
                                        <div className="dp_dt150">
                                            <div className="img148">
                                                <img src="/assets/images/left-imgs/img-1.jpg" alt />
                                            </div>
                                            <div className="prfledt1">
                                                <h2>{selectedJob.attributes.titre}</h2>
                                                <span>{selectedJob.attributes.slug}</span>
                                            </div>
                                        </div>
                                        <ul className="_ttl120">
                                            <li>
                                                <div className="_ttl121">
                                                    <div className="_ttl122">Publication</div>
                                                    <div className="_ttl123">{selectedJob.attributes.date_publication.slice(0, 10)}</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="_ttl121">
                                                    <div className="_ttl122">Expiration</div>
                                                    <div className="_ttl123">{selectedJob.attributes.date_expiration.slice(0, 10)}</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="_ttl121">
                                                    <div className="_ttl122">Pays</div>
                                                    <div className="_ttl123">{selectedJob.attributes.pays}</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="_ttl121">
                                                    <div className="_ttl122">Urgent</div>
                                                    <div className="_ttl123">{selectedJob.attributes.urgent ? "Oui" : "Non"}</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="_215b15">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="course_tabs">
                                    <nav>
                                        <div className="nav nav-tabs tab_crse" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-selected="true">A Propos De L'Emploi</a>
                                            <a className="nav-item nav-link" id="nav-courses-tab" data-toggle="tab" href="#nav-courses" role="tab" aria-selected="false">Les Autres Emplois</a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_215b17">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="course_tab_content">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-about" role="tabpanel">
                                            <div className="_htg451">
                                                <div className="_htg452">
                                                    <h3>Description</h3>
                                                    <p style={{ textAlign: "justify" }}>{selectedJob.attributes.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-courses" role="tabpanel">
                                            <div className="crse_content">
                                                <h3>Autres Emplois</h3>
                                                <div className="_14d25">
                                                    <div className="row">
                                                        {!loading && jobs.map((job) => (
                                                            <Job
                                                                title={job.attributes.titre}
                                                                expiration={job.attributes.date_expiration}
                                                                publication={job.attributes.date_publication}
                                                                description={job.attributes.description}
                                                                //jobDomain={job.attributes.jobdomain.data.attributes.nom}
                                                                job={job}
                                                            />
                                                        ))}
                                                        {loading && <Skelet />}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedJob: state.jobs.selectedJob,
        jobs: state.jobs.jobs,
        loading: state.jobs.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectJob: (jobId) => dispatch(selectJob(jobId)),
        fetchJobs: () => dispatch(fetchJobs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailsPage);