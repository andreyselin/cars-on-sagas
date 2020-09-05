import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import { ListManufacturers } from "./controllers/ListManufacturers";
import { Manufacturer } from "./controllers/Manufacturer";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./redux/reducer";
import { rootSaga } from './redux/sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

function App() {
  return (
      <Provider store={ store }>
          <Router>
              <ListManufacturers path="/" />
              <Manufacturer path="/manufacturer/:mId" />
          </Router>
      </Provider>
  );
}

export default App;
