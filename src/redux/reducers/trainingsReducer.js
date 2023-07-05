const initialState = {
    trainings: [],
    loading: true,
  };
  
  export const trainingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TRAININGS_SUCCESS':
        return {
          ...state,
          trainings: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };