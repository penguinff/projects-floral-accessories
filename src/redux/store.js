import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSagas from './root-sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware(
      { 
        thunk: false, 
        serializableCheck: false
      }
    ).concat(sagaMiddleware);

    // Conditionally add another middleware in dev
    if (process.env.NODE_ENV !== 'production') {
      middleware.push(logger)
    }

    return middleware;
  },
  devTools: process.env.NODE_ENV !== 'production'
})

// to start Saga
sagaMiddleware.run(rootSagas);

// save the redux store in the local storage of browser
export const persistor = persistStore(store);