import React from 'react';
import './style.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store/store';
import HomePage from './components/homepage';
import NotFound from './components/notFound';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
