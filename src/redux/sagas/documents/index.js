import { AxiosError } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import API from "../../../api/endpoints";
import { requestEnd, requestError, requestStart } from "../../actions/commonActions";
import { fetchDocumentsSuccess } from "../../actions/documentsActions";

function* fetchDocuments(action) {
  try {
    yield put(requestStart())
    const documents = yield call(API.library.getDocuments, action.payload);
    //TODO: Filter out bought documents and put them somewhere else
    yield put(fetchDocumentsSuccess(documents));
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
  yield takeEvery('FETCH_DOCUMENTS_REQUESTED', fetchDocuments);
}

export default cvsSaga;
