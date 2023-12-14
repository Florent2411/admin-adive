//==================== REQUEST =====================//
export function fetchJobsRequest(payload) {
  return {
    type: 'FETCH_JOBS_REQUESTED',
    payload,
  }
}

export function createJobRequest(payload) {
  return {
    type: 'CREATE_JOB_REQUESTED',
    payload,
  }
}

export function updateJobRequest(payload) {
  return {
    type: 'UPDATE_JOB_REQUESTED',
    payload,
  }
}

export function deleteJobRequest(payload) {
  return {
    type: 'DELETE_JOB_REQUESTED',
    payload,
  }
}

//==================== SUCCESS =====================//

export const fetchJobsSuccess = (jobs) => {
  return {
    type: 'FETCH_JOBS_SUCCESS',
    payload: jobs
  };
};

export function updateJobSuccess(job) {
  return {
    type: "UPDATE_JOB_SUCCESS",
    payload: job
  }
}

export function createJobSuccess(job) {
  return {
    type: "CREATE_JOB_SUCCESS",
    payload: job
  }
}

export function deleteJobSuccess(jobId) {
  return {
    type: "DELETE_JOB_SUCCESS",
    payload: jobId
  }
}

export function selectJob(jobId) {
  return {
    type: "SELECT_JOB",
    payload: jobId
  }
}
