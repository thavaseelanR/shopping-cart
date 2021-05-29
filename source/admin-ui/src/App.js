import React from 'react'
import './styles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Provider } from 'react-redux';
import Layouts from './layouts/index';

import { configureStore } from './utils';
const initialState = {};
const store = configureStore(initialState)

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Layouts />
      </Router>
    </Provider>
  );
}

export default App;
