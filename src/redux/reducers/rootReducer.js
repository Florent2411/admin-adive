import { combineReducers } from 'redux';
import { authReducer } from "./authReducer";
import { blogsReducer } from "./blogsReducer";
import { cvsReducer } from "./cvsReducer";
import { jobsReducer } from "./jobsReducer";
import { formationsReducer } from './formationsReducer';
import { postulationsReducer } from './postulationsReducer';

const rootReducer = combineReducers({
  jobs: jobsReducer,
  blogs: blogsReducer,
  formations: formationsReducer,
  cvs: cvsReducer,
  auth: authReducer,
  postulations: postulationsReducer,
});

export default rootReducer;
