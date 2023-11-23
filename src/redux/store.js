import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage/session';
import createSagaMiddleware from "redux-saga";
import thunk from 'redux-thunk';
import rootReducer from "../redux/reducers/rootReducer";
import authSaga from "./sagas/auth";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [
        thunk,
        sagaMiddleware,
    ],
    devTools: true
});

sagaMiddleware.run(authSaga);

export const persistor = persistStore(store);

