import { combineReducers } from 'redux';
import { authReducer } from "./reducers/authReducer";
import { blogsReducer } from "./reducers/blogsReducer";
import { cvsReducer } from "./reducers/cvsReducer";
import { jobsReducer } from "./reducers/jobsReducer";
import { trainingsReducer } from "./reducers/trainingsReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  blogs: blogsReducer,
  trainings: trainingsReducer,
  cvs: cvsReducer,
  auth: authReducer,
});

export default rootReducer;