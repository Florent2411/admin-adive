import React from "react";
import { Avatar } from 'antd';

export default function Job({ job, onClick }) {


  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="fcrse_1 mt-30">
          <div className="tutor_img">
            <Avatar style={{ backgroundColor: 'aquamarine' }}>
              <strong style={{ color: "#000" }}>{job.titre.charAt(0)}</strong>
            </Avatar>
          </div>
          <div className="tutor_content_dt">
            <div className="tutor150">
              <a style={{ cursor: "pointer" }} className="tutor_name"
                //onClick={() => handleJobClick(props.job.id)}
                onClick={onClick}
              >
                {job.titre.slice(0, 15)}...
              </a>
              <div className="mef78" title="Verify">
                <i className="uil uil-check-circle" />
              </div>
            </div>
            <div className="tutor_cate">{job.description.slice(0, 40)}...</div>
            <div className="tut1250">
              <span className="vdt15"> {job.date_publication.slice(0, 10)}</span>
              <span className="vdt15"> {job.date_expiration.slice(0, 10)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

