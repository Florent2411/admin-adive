import { AxiosError } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import API from "../../../api/endpoints";
import { requestEnd, requestError, requestStart } from "../../actions/authActions";
import { fetchFormationsSuccess } from "../../actions/formationsActions";

function* fetchFormations(action) {

  try {
    yield put(requestStart())
    const formations = yield call(API.formations.getFormations, action.payload);
    yield put(fetchFormationsSuccess(formations));
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
  yield takeEvery('FETCH_FORMATIONS_REQUESTED', fetchFormations);
}

export default cvsSaga;
