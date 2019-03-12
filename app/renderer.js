import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './reducers';

import Home from './components/Home.jsx';

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Route path="/" component={Home} />
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  );
