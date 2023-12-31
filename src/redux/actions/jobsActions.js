import axios from 'axios';
import config from '../../config';

export const fetchJobsSuccess = (jobs) => {
  return {
    type: 'FETCH_JOBS_SUCCESS',
    payload: jobs
  };
};

export const fetchJobs = () => {
  return (dispatch) => {
    axios.get(config.apiUrl +"/jobs?populate=*")
      .then((response) => {
        //console.log(response.data.data)
        dispatch(fetchJobsSuccess(response.data.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const selectJob = (jobId) => {
  return {
    type: 'SELECT_JOB',
    payload: jobId,
  };
};
