import React, { useState, useEffect } from "react";
import { Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { selectTraining } from '../redux/actions/trainingsActions';
import { useNavigate } from 'react-router-dom';

function TrainingDetailsPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selectedTrainingId = useSelector((state) => state.trainings.selectedTrainingId);
    const selectedTraining = useSelector((state) =>
        state.trainings.trainings.find(training => training.id == selectedTrainingId)
    );

    //console.log(selectedTrainingId)

    useEffect(() => {
        dispatch(selectTraining(selectedTrainingId));
    }, [dispatch]);

    return (
        <div style={{ marginBottom: 900 }}>
            <div className="_215b01" style={{ marginTop: -30 }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section3125">
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-lg-5 col-md-6">
                                        <div className="preview_video">
                                            <a href="##" className="fcrse_img" data-toggle="modal" data-target="#videoModal">
                                                <img src={selectedTraining.attributes.image.data[0].attributes.formats.thumbnail.url} alt />
                                                <div className="course-overlay">
                                                    <div className="badge_seller">{selectedTraining.attributes.avec_certificat ? "Certification" : "Sans Certification"}</div>
                                                    <span className="play_btn1"><i className="uil uil-play" /></span>
                                                    <span className="_215b02">Preview this course</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 col-md-6">
                                        <div className="_215b03">
                                            <h2>{selectedTraining.attributes.Theme}</h2>
                                            <span className="_215b04" style={{ textAlign: "justify" }}>{selectedTraining.attributes.description.slice(0, 250)}...</span>
                                        </div>
                                        <div className="_215b05">
                                            <div className="crse_reviews mr-2">
                                                <i className="uil uil-star" />{selectedTraining.attributes.prix_formation}
                                            </div>
                                            FCFA
                                        </div>
                                        <div className="_215b06">
                                            <div className="_215b07">
                                                <span><i className="uil uil-comment" /></span>
                                                {selectedTraining.attributes.langue}
                                            </div>
                                        </div>
                                        <div className="_215b05">
                                            Denière modification le {selectedTraining.attributes.updatedAt.slice(0, 10)}
                                        </div>
                                        <ul className="_215b31">
                                            <li><button className="btn_adcart" onClick={() => {
                                                navigate("/trainings")
                                            }}>Retour</button></li>
                                            <li><button className="btn_buy">Commencer</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="_215b15 _byt1458">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="user_dt5">
                                <div className="user_dt_left">
                                    <div className="live_user_dt">
                                        <div className="user_img5">
                                            <a href="#">
                                                <Avatar style={{ backgroundColor: 'aquamarine' }}>
                                                    <strong style={{ color: "#000" }}>{selectedTraining.attributes.formateur.data.attributes.Nom.charAt(0)}</strong>
                                                </Avatar>
                                            </a>
                                        </div>
                                        <div className="user_cntnt" style={{ margin: '0px 10px' }}>
                                            <a href="#" className="_df7852">
                                                {selectedTraining.attributes.formateur.data.attributes.Nom} {selectedTraining.attributes.formateur.data.attributes.Prenoms}
                                            </a>
                                            <button className="subscribe-btn"> {selectedTraining.attributes.formateur.data.attributes.Email}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="user_dt_right">
                                    <ul>
                                        <li>
                                            <a href="#" className="lkcm152"><i className="uil uil-eye" /><span>1452</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="lkcm152"><i className="uil uil-thumbs-up" /><span>100</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="lkcm152"><i className="uil uil-thumbs-down" /><span>20</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="lkcm152"><i className="uil uil-share-alt" /><span>9</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="course_tabs">
                                <nav>
                                    <div className="nav nav-tabs tab_crse justify-content-center" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-selected="true">Description</a>
                                        <a className="nav-item nav-link" id="nav-courses-tab" data-toggle="tab" href="#nav-courses" role="tab" aria-selected="false">Plan</a>
                                        <a className="nav-item nav-link" id="nav-reviews-tab" data-toggle="tab" href="#nav-reviews" role="tab" aria-selected="false">Cible</a>
                                        <a className="nav-item nav-link" id="nav-reviews-tab" data-toggle="tab" href="#nav-reviews2" role="tab" aria-selected="false">Objectifs</a>
                                        <a className="nav-item nav-link" id="nav-reviews-tab" data-toggle="tab" href="#nav-reviews2" role="tab" aria-selected="false">Compétences</a>

                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="_215b17" style={{ marginBottom: 200 }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course_tab_content">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-about" role="tabpanel">
                                        <p className="content-summary" style={{ textAlign: "justify" }}>
                                            {selectedTraining.attributes.description}
                                        </p>
                                    </div>
                                    <div className="tab-pane fade" id="nav-courses" role="tabpanel">
                                        <div className="crse_content">
                                            <div id="accordion" className="ui-accordion ui-widget ui-helper-reset">
                                                <a href="javascript:void(0)" className="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
                                                    <div className="section-header-left">
                                                        <span className="section-title-wrapper">
                                                            <i className="uil uil-presentation-play crse_icon" />
                                                            <span className="section-title-text">Introduction to this Course</span>
                                                        </span>
                                                    </div>
                                                    <div className="section-header-right">
                                                        <span className="num-items-in-section">8 lectures</span>
                                                        <span className="section-header-length">22:08</span>
                                                    </div>
                                                </a>
                                                <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142" />
                                                            <div className="top">
                                                                <div className="title">A Note On Asking For Help</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:12</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142" />
                                                            <div className="top">
                                                                <div className="title">Introducing Our TA</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">01:42</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142" />
                                                            <div className="top">
                                                                <div className="title">Join the Online Community</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:51</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142" />
                                                            <div className="top">
                                                                <div className="title">Why This Course?</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <a href="course_detail_view.html#" className="preview-text">Preview</a>
                                                            <span className="content-summary">07:48</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-reviews" role="tabpanel">
                                        <div className="student_reviews">
                                            <div className="row">
                                                <p className="content-summary" style={{ textAlign: "justify" }}>
                                                    {selectedTraining.attributes.cible}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-reviews2" role="tabpanel">
                                        <div className="student_reviews">
                                            <div className="row">
                                                <p className="content-summary" style={{ textAlign: "justify" }}>
                                                    {selectedTraining.attributes.objectifs}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-reviews3" role="tabpanel">
                                        <div className="student_reviews">
                                            <div className="row">
                                                <p className="content-summary" style={{ textAlign: "justify" }}>
                                                    {selectedTraining.attributes.Competences}
                                                </p>
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

export default TrainingDetailsPage;