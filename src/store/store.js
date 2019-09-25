import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers/index';

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

const middleware = [thunk, loggerMiddleware];

export default createStore(reducer, compose(applyMiddleware(...middleware)));
