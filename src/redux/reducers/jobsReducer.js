const initialState = {
  jobs: [],
  loading: true,
  selectedJobId: null,
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
      return {
        ...state,
        selectedJobId: action.payload,
      };
    default:
      return state;
  }
};