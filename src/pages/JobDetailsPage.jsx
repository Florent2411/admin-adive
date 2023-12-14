import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPostulationsRequest, postulateRequest } from "../redux/actions/postulationsActions";
import { Spinner } from "../components";

export default function JobDetailsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedJobId = useSelector((state) => state.jobs.selectedJobId);
  const { loading, postulations } = useSelector((state) => state.postulations);
  const { token } = useSelector((state) => state.auth);
  const selectedJob = useSelector((state) =>
    state.jobs.jobs.find(job => job.id === selectedJobId)
  );

  const checkIfAlreadyPostulated = () => {
    if (!postulations) return false;

    const result = postulations.find((postulation) => postulation.job.id === selectedJob.id);
    return Boolean(result);
  }

  const handlePostulate = () => {
    if (checkIfAlreadyPostulated()) {
      dispatch(postulateRequest({ token, job: selectedJobId }));
      return;
    }
    dispatch(postulateRequest({ token, job: selectedJobId }));
  }

  useEffect(() => {
    token && dispatch(fetchPostulationsRequest({ token }));
  }, [dispatch, token]);

  return (
    <div style={{ marginBottom: 900 }}>
      <div className="sa4d25">
        <div className="container-fluid">
          <div className="row justify-content-md-center" style={{ marginBottom: 30 }}>
            <div className="col-md-10">
              <div className="section3125 rpt145">
                <div className="row">
                  <div className="col-lg-7">
                    <span><i className="uil uil-windsock" /></span>
                    <div className="dp_dt150">
                      <div className="img148">
                        <img src="/assets/images/left-imgs/img-1.jpg" alt="Something cool" />
                      </div>
                      <div className="prfledt1">
                        <h2>{selectedJob.titre}</h2>
                        <span>{selectedJob.slug}</span>
                      </div>
                    </div>
                    <ul className="_ttl120">
                      <li>
                        <div className="_ttl121">
                          <div className="_ttl122">Publication</div>
                          <div className="_ttl123">{selectedJob.date_publication.slice(0, 10)}</div>
                        </div>
                      </li>
                      <li>
                        <div className="_ttl121">
                          <div className="_ttl122">Expiration</div>
                          <div className="_ttl123">{selectedJob.date_expiration.slice(0, 10)}</div>
                        </div>
                      </li>
                      <li>
                        <div className="_ttl121">
                          <div className="_ttl122">Pays</div>
                          <div className="_ttl123">{selectedJob.pays}</div>
                        </div>
                      </li>
                      <li>
                        <div className="_ttl121">
                          <div className="_ttl122">Urgent</div>
                          <div className="_ttl123">{selectedJob.urgent ? "Oui" : "Non"}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-5">
                    <ul class="_bty149">
                      <li><button class="subscribe-btn btn500" onClick={() => {
                        navigate("/jobs")
                      }}>Retour</button></li>
                      <li><button
                        onClick={handlePostulate}
                        class="msg125 btn500">
                        {
                          loading ? (<Spinner />) : (checkIfAlreadyPostulated() ? "Abandonner ma candidature" : "Postuler")
                        }
                      </button></li>
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
                          <p style={{ textAlign: "justify" }}>{selectedJob.description}</p>
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

