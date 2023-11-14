const initialState = {
  token: "",
  user: null,
  loading: false,
};

export const authReducer = (state = initialState, action) => {
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
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        token: "",
        user: null,
        loading: false,
      }
    default:
      return state;
  }
};
