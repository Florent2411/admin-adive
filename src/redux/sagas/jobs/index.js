import { AxiosError } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import API from "../../../api/endpoints";
import { requestEnd, requestError, requestStart } from "../../actions/commonActions";
import { fetchJobsSuccess } from "../../actions/jobsActions";

function* fetchJobs(action) {

  try {
    yield put(requestStart())
    const jobs = yield call(API.jobs.getJobs, action.payload);
    yield put(fetchJobsSuccess(jobs));
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
  yield takeEvery('FETCH_JOBS_REQUESTED', fetchJobs);
}

export default cvsSaga;
