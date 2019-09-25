import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store/store';
import SearchPage from './components/SearchPage';
import NotFound from './components/notFound';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
