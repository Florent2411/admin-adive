import apiClient from "../../api/client";

export function requestStart() {
  return {
    type: 'REQUEST_START',
  };
}

export function requestEnd() {
  return {
    type: 'REQUEST_END',
  };
}

export function loginSuccess(token, user) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      token, user
    }
  };
}

export function logoutSuccess() {
  return {
    type: 'LOGOUT_SUCCESS',
  };
}

export function login(identifier, password) {
  return async (dispatch) => {
    try {
      dispatch(requestStart());
      const response = await apiClient.post("/auth/local", { identifier, password });
      const { jwt, user } = response.data;
      dispatch(loginSuccess(jwt, user));
    }
    catch (error) {
      console.error(error);
    }
    finally {
      dispatch(requestEnd());
    }
  };
}

export async function logout() {
  return (dispatch) => {
    dispatch(logoutSuccess());
  }
}