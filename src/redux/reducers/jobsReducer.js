const initialState = {
  jobs: [],
  loading: true,
  selectedJob: null,
};

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOBS_SUCCESS':
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case 'SELECT_JOB':
      const selectedJobId = action.payload;
      const selectedJob = state.jobs.find((job) => job.id == selectedJobId);
      //console.log(selectedJobId)
      return {
        ...state,
        selectedJob: selectedJob || null,
      };
    default:
      return state;
  }
};