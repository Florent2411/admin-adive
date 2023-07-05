import React, { useState } from "react";
import { Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Job(props) {

    const navigate = useNavigate();

    const handleJobClick = (jobId) => {
        navigate(`/job-details/${jobId}`);
    };

    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="fcrse_1 mt-30">
                    <div className="tutor_img">
                        <Avatar style={{ backgroundColor: 'aquamarine' }}>
                            <strong style={{ color: "#000" }}>{props.title.charAt(0)}</strong>
                        </Avatar>
                    </div>
                    <div className="tutor_content_dt">
                        <div className="tutor150">
                            <a style={{cursor: "pointer"}} className="tutor_name"
                                onClick={() => handleJobClick(props.job.id)}>{props.title.slice(0, 15)}...</a>
                            <div className="mef78" title="Verify">
                                <i className="uil uil-check-circle" />
                            </div>
                        </div>
                        <div className="tutor_cate">{props.description.slice(0, 40)}...</div>
                        <div className="tut1250">
                            <span className="vdt15"> {props.publication.slice(0, 10)}</span>
                            <span className="vdt15"> {props.expiration.slice(0, 10)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
