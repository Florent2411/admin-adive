const initialState = {
  token: "",
  loading: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
