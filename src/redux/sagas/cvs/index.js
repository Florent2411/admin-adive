import { AxiosError } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import API from "../../../api/endpoints";
import { requestEnd, requestError, requestStart } from "../../actions/authActions";
import { createCVSuccess, deleteCVSuccess, updateCVSuccess } from "../../actions/cvsActions";

function* createCV(action) {
  try {
    yield put(requestStart())
    const cv = yield call(API.cvs.createCV, action.payload);
    yield put(createCVSuccess(cv));
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

function* updateCV(action) {
  try {
    yield put(requestStart())
    const cv = yield call(API.cvs.updateCV, action.payload);
    yield put(updateCVSuccess(cv));
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

function* deleteCV(action) {
  try {
    yield put(requestStart())
    const cv = yield call(API.cvs.deleteCV, action.payload);
    yield put(deleteCVSuccess(cv.id));
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

function* cvsSaga() {
  yield takeEvery('CREATE_CV_REQUESTED', createCV);
  yield takeEvery('UPDATE_CV_REQUESTED', updateCV);
  yield takeEvery('DELETE_CV_REQUESTED', deleteCV);
}

export default cvsSaga;
