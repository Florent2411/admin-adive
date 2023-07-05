
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../redux/actions/jobsActions';
import Job from '../components/Job';
import Skelet from '../components/Skeleton';

const JobsPage = (props) => {
    const { loading, jobs, fetchJobs } = props;

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    return (
        <div className="sa4d25" style={{ marginBottom: 0 }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 col-lg-8">
                        <div className="section3125">
                            <div className="explore_search">
                                <div className="ui search focus">
                                    <div className="ui left icon input swdh11">
                                        <input className="prompt srch_explore" type="text" placeholder="Recherche..." />
                                        <i className="uil uil-search-alt icon icon2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
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
                                <div className="col-md-12">
                                    <div className="main-loader mt-50">
                                        <div className="spinner">
                                            <div className="bounce1" />
                                            <div className="bounce2" />
                                            <div className="bounce3" />
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
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs.jobs,
        loading: state.jobs.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchJobs: () => dispatch(fetchJobs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsPage);