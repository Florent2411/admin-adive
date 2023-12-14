import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Job from '../components/Job';
import ContentLoader from '../components/spinner/ContentLoader.jsx';
import { fetchJobsRequest, selectJob } from '../redux/actions/jobsActions';
import { SearchBar } from "../components";

export default function JobsPage() {
  const { jobs, loading } = useSelector((state) => state.jobs);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchInput = (searchInput) => {
  }

  useEffect(() => {
    dispatch(fetchJobsRequest(token));
  }, [dispatch, token]);

  const handleJobClick = (jobId) => {
    navigate(`/job-details/${jobId}`);
    dispatch(selectJob(jobId));
  };

  return (
    <div className="sa4d25" style={{ marginBottom: 0 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-8">
            <div className="section3125">
              <SearchBar onChange={(e) => handleSearchInput(e.target.value)} />
            </div>
          </div>
          <div className="col-md-12">
            <div className="_14d25">
              <div className="row">
                {!loading && jobs.map((job) => (
                  <Job job={job} onClick={() => handleJobClick(job.id)} />
                ))}
                {loading && <ContentLoader />}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

