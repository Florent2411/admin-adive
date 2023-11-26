const initialState = {
  cvs: [],
  loading: false,
};

export const cvsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_START':
      return {
        ...state,
        loading: true,
      };
    case 'REQUEST_END':
      return {
        ...state,
        loading: false,
      };
    case 'FETCH_CVS_SUCCESS':
      return {
        ...state,
        cvs: action.payload,
        loading: false,
      };
    case 'CREATE_CV_SUCCESS':
      return {
        ...state,
        cvs: [...state.cvs, action.payload],
      };
    case 'DELETE_CV_SUCCESS':
      return {
        ...state,
        cvs: state.cvs.filter((cv) => cv.id !== action.payload),
      };
    default:
      return state;
  }
};
