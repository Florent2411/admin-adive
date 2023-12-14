import { AxiosError } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import API from "../../../api/endpoints";
import { requestEnd, requestError, requestStart } from "../../actions/commonActions";
import { postulateSuccess, fetchPostulationsSuccess } from "../../actions/postulationsActions";

function* postulate(action) {
  try {
    yield put(requestStart())
    const postulation = yield call(API.postulations.postulate, action.payload);
    yield put(postulateSuccess(postulation));
  }

  catch (error) {
    if (error instanceof AxiosError) {
      const { message, code } = error.response.data.error
      yield put(requestError(message || code));
    }
    console.error(error);
  }

  finally {
    yield put(requestEnd());
  }
}

function* fetchPostulations(action) {
  try {
    yield put(requestStart())
    const postulations = yield call(API.postulations.getPostulations, action.payload);
    yield put(fetchPostulationsSuccess(postulations));
  }

  catch (error) {
    if (error instanceof AxiosError) {
      const { message, code } = error.response.data.error
      yield put(requestError(message || code));
    }
    console.error(error);
  }

  finally {
    yield put(requestEnd());
  }
}

function* cvsSaga() {
  yield takeEvery('POSTULATE_REQUESTED', postulate);
  yield takeEvery('FETCH_POSTULATIONS_REQUESTED', fetchPostulations);
}

export default cvsSaga;
