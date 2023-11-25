import Toaster from "../../libs/notifications/toasts";

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

export function requestError(message) {
  Toaster.error(message);
  return {
    type: 'REQUEST_ERROR',
    payload: {
      message
    }
  }
}

export function loginSuccess(token, user) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      token, user
    }
  };
}

export function registerSuccess(token, user) {
  return {
    type: 'REGISTER_SUCCESS',
    payload: {
      token, user
    }
  };
}

export function setupAccountSuccess(user) {
  return {
    type: 'SETUP_ACCOUNT_SUCCESS',
    payload: {
      user
    }
  };
}

export function logoutSuccess() {
  return {
    type: 'LOGOUT_SUCCESS',
  };
}

export function loginRequest(identifier, password) {
  return {
    type: 'LOGIN_REQUESTED',
    payload: {
      identifier,
      password,
    }
  }
}

export function registerRequest({ username, email, password }) {
  return {
    type: 'REGISTER_REQUESTED',
    payload: {
      username,
      email,
      password,
    }
  }
}

export function setupAccountRequest(input) {
  return {
    type: 'SETUP_ACCOUNT_REQUESTED',
    payload: input
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(logoutSuccess());
  }
}