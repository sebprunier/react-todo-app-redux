import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

import { createStore } from 'redux'
import { reducer } from './reducers'

import { Provider } from 'react-redux'

let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
