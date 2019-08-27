import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';
import { persistStore, autoRehydrate } from 'redux-persist';
import { asyncSessionStorage } from 'redux-persist/storages';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { REHYDRATE } from 'redux-persist/constants';
import rootReducer from './rootReducer';
import routeMap from './routesMap';

const createActionBuffer = require('redux-action-buffer');
export default (history: any) => {

  const {
    reducer,
    middleware,
    enhancer,
    initialDispatch
  } = connectRoutes(history, routeMap, {initialDispatch: false});

  const middlewares = [

    reduxImmutableStateInvariant(),
    middleware,
    createActionBuffer(REHYDRATE)
  ];

  const enhancers = composeWithDevTools(enhancer, applyMiddleware(...middlewares), autoRehydrate());

  let store: any = createStore(rootReducer(reducer), enhancers);
  store.initialDispatch = initialDispatch;

  if (self.sessionStorage !== undefined) {
    persistStore(store, {
      blacklist: ['page', 'location'],
      storage: asyncSessionStorage
    });

    persistStore(store, {
      whitelist: ['user'],
    });
  }

  return store;
};