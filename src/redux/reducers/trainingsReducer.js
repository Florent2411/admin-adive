const initialState = {
  trainings: [],
  loading: true,
  selectedTrainingId: null,

};

export const trainingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRAININGS_SUCCESS':
      return {
        ...state,
        trainings: action.payload,
        loading: false,
      };
    case 'SELECT_TRAINING':
      return {
        ...state,
        selectedTrainingId: action.payload,
      };
    default:
      return state;
  }
};