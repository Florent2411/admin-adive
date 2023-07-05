import { combineReducers } from 'redux';
import { jobsReducer } from "./reducers/jobsReducer";
import { blogsReducer } from "./reducers/blogsReducer"
import { trainingsReducer } from "./reducers/trainingsReducer"

const rootReducer = combineReducers({
  jobs: jobsReducer,
  blogs: blogsReducer,
  trainings: trainingsReducer,
});

export default rootReducer;