
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTrainings, selectTraining } from '../redux/actions/trainingsActions';
import Training from '../components/Training';
import Skelet from '../components/Skeleton';

const TrainingsPage = () => {
    const trainings = useSelector((state) => state.trainings.trainings);
    const loading = useSelector((state) => state.jobs.loading);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchTrainings());
    }, [dispatch]);

    const handleTrainingClick = (trainingId) => {
        navigate(`/training-details/${trainingId}`);
        dispatch(selectTraining(trainingId));
    };

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
                                {!loading && trainings.map((training) => (
                                    <Training training={training} onClick={() => handleTrainingClick(training.id)} />
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

export default TrainingsPage;