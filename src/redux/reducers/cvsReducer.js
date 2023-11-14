const initialState = {
  cvs: [],
  loading: true,
};

export const cvsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CVS_SUCCESS':
      return {
        ...state,
        cvs: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
