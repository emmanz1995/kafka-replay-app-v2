import thunk from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from '../reducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

console.log('...store:', store)
console.log('...store.getState:', store.getState())

export default store;