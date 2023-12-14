import Toaster from "../../libs/notifications/toasts";

const initialState = {
  postulations: [],
  loading: false,
};

export const postulationsReducer = (state = initialState, action) => {
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
    case 'POSTULATE_SUCCESS':
      Toaster.success("Postulation créée avec succès");
      return {
        ...state,
        postulations: [...state.postulations, action.payload],
        loading: false,
      };
    case 'FETCH_POSTULATIONS_SUCCESS':
      return {
        ...state,
        postulations: action.postulations,
        loading: false,
      };
    case 'DELETE_POSTULATION_SUCCESS':
      return {
        ...state,
        postulations: state.postulations.filter((postulation) => postulation.id !== action.payload),
      };
    default:
      return state;
  }
};
