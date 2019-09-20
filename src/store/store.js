import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/index';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducer);
