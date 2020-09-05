import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import { ListManufacturers } from "./controllers/ListManufacturers";
import { Manufacturer } from "./controllers/Manufacturer";

function App() {
  return (
    <div>
        <Router>
            <ListManufacturers path="/" />
            <Manufacturer path="/manufacturer/:mId" />
        </Router>
    </div>
  );
}

export default App;
