import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Provider, connect } from 'react-redux'

import {App} from './containers';

import {mapStateToProps, mapDispatchToProps, store} from './redux';

const ReduxApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById('root')
);