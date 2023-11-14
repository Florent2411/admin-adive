import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';
import { authReducer } from './slices/authSlice';
import { jobsReducer } from './slices/jobsSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    jobs: jobsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [
        thunk,
    ],
});

export const persistor = persistStore(store);

