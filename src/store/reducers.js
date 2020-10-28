import { combineReducers } from 'redux';
import prosReducer from './pros/reducer';
import consReducer from './cons/reducer';

const createRootReducers = () =>
  combineReducers({
    prosReducer,
    consReducer,
  });

export default createRootReducers;
