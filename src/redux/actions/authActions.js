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


export function logout() {
  return (dispatch) => {
    dispatch(logoutSuccess());
  }
}
