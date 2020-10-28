import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createRootReducers from './reducers';
import 'regenerator-runtime/runtime';

const makeStore = () => {
  const middleware = [];

  const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV !== 'production',
  });

  middleware.push(loggerMiddleware);

  const store = createStore(createRootReducers(), applyMiddleware(...middleware));

  return store;
};

export default makeStore();
