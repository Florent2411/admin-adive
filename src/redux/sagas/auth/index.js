import { AxiosError } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../../api/endpoints";
import { loginSuccess, registerSuccess, requestEnd, requestError, requestStart } from "../../actions/authActions";

function* login(action) {
    try {
        yield put(requestStart())
        const { token, user } = yield call(API.auth.login, action.payload);
        yield put(loginSuccess(token, user));
    }

    catch (error) {
        if (error instanceof AxiosError) {
            const { message } = error.response.data.error
            yield put(requestError(message));
        }
        console.error(error);
    }

    finally {
        yield put(requestEnd());
    }
}

function* register(action) {
    try {
        yield put(requestStart())
        const response = yield call(API.auth.register, action.payload);
        console.log(response);
        const { token, user } = response;
        yield put(registerSuccess(token, user));
    }

    catch (error) {
        if (error instanceof AxiosError) {
            const { message } = error.response.data.error
            yield put(requestError(message));
        }
        console.error(error);
    }

    finally {
        yield put(requestEnd());
    }
}

function* authSaga() {
    yield takeLatest('LOGIN_REQUESTED', login);
    yield takeLatest('REGISTER_REQUESTED', register);
}

export default authSaga;