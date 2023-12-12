const initialState = {
  formations: [],
  loading: false,
  selectedFormationId: "",
};

export const formationsReducer = (state = initialState, action) => {
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
    case 'SELECT_FORMATION':
      return {
        ...state,
        selectedFormationId: action.payload,
      };
    case 'FETCH_FORMATIONS_SUCCESS':
      return {
        ...state,
        formations: action.payload,
        loading: false,
      };
    case 'CREATE_FORMATION_SUCCESS':
      return {
        ...state,
        formations: [...state.formations, action.payload],
      };
    case 'UPDATE_FORMATION_SUCCESS':
      return {
        ...state,
        formations: state.formations.map((formation) => {
          if (formation.id === action.payload.id) {
            formation = action.payload;
          }

          return formation;
        }
        ),
      };
    case 'DELETE_FORMATION_SUCCESS':
      return {
        ...state,
        formations: state.formations.filter((formation) => formation.id !== action.payload),
      };
    default:
      return state;
  }
};
