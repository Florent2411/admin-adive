import { apiClient } from '../../api/client';

export const fetchJobsSuccess = (jobs) => {
  return {
    type: 'FETCH_JOBS_SUCCESS',
    payload: jobs
  };
};

export const fetchJobs = (token) => {
  return (dispatch) => {
    apiClient.get("/jobs?populate=*", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
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
