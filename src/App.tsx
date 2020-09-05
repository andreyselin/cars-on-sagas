import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import { ListManufacturers } from "./controllers/ListManufacturers";
import { Manufacturer } from "./controllers/Manufacturer";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { rootReducer } from "./redux/reducer";

const store = createStore(rootReducer);


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
