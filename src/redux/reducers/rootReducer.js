import { combineReducers } from 'redux';
import { authReducer } from "./authReducer";
import { blogsReducer } from "./blogsReducer";
import { cvsReducer } from "./cvsReducer";
import { jobsReducer } from "./jobsReducer";
import { trainingsReducer } from "./trainingsReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  blogs: blogsReducer,
  trainings: trainingsReducer,
  cvs: cvsReducer,
  auth: authReducer,
});

export default rootReducer;