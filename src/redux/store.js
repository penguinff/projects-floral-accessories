import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';
import rootSagas from './root-sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// use logger middleware in development environment
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares) // connect middleware to the Store
));

// to start Saga
sagaMiddleware.run(rootSagas);

// save the redux store in the local storage of browser
export const persistor = persistStore(store);