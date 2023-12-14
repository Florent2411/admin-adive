import { AxiosError } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../../api/endpoints";
import { requestStart, requestEnd, requestError } from "../../actions/commonActions";
import { loginSuccess, registerSuccess, setupAccountSuccess } from "../../actions/authActions";

const DEFAULT_ERROR_MESSAGE = "Une erreur s'est produite";

function* handleAxiosError(error) {
  let errorMessage = DEFAULT_ERROR_MESSAGE;
  const responseError = error.response.data.error;

  if (!responseError) {
    yield put(requestError(errorMessage));
    return;
  }

  const { name } = responseError;

  if (name === "ValidationError") {
    errorMessage = "Vos informations sont incorrects";
    yield put(requestError(errorMessage));
  }

}

function* handleError(error) {
  if (error instanceof AxiosError) {
    yield handleAxiosError(error);
  }
  console.error(error);
}

function* authenticate(action, authFunction, successAction) {
  try {
    yield put(requestStart())
    const { jwt, user } = yield call(authFunction, action.payload);
    yield put(successAction(jwt, user));
  }

  catch (error) {
    yield handleError(error);
  }

  finally {
    yield put(requestEnd());
  }
}

function* login(action) {
  yield authenticate(action, API.auth.login, loginSuccess);
}

function* register(action) {
  yield authenticate(action, API.auth.register, registerSuccess);
}

function* setupAccount(action) {
  try {
    yield put(requestStart())
    const user = yield call(API.auth.setupAccount, action.payload);
    yield put(setupAccountSuccess(user));
  }

  catch (error) {
    yield handleError(error);
  }

  finally {
    yield put(requestEnd());
  }
}

function* authSaga() {
  yield takeLatest('LOGIN_REQUESTED', login);
  yield takeLatest('REGISTER_REQUESTED', register);
  yield takeLatest('SETUP_ACCOUNT_REQUESTED', setupAccount);
}

export default authSaga;
