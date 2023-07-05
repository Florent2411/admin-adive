import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // ou redux-persist/lib/sessionStorage pour sessionStorage
import thunk from 'redux-thunk'; 

import rootReducer from './reducers'; // Remplacez cette importation par votre rootReducer

const persistConfig = {
  key: 'root', // La clé à utiliser pour stocker l'état
  storage, // Le type de stockage à utiliser (localStorage ou sessionStorage)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk) // Ajoutez redux-thunk comme middleware
  );
  
  export const persistor = persistStore(store);