import { useState, useEffect } from 'react';
import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="app-container">
      <h1>Path2Tech Weather App</h1>
      <Weather />
    </div>
  );
}

export default App;
