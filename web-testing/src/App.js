import React from 'react';
import Dashboard from "./Components/Dashboard";
import './App.css';

export const sum = (a, b) => {
  return a + b;
};

function App() {
  return (
    <div className="App">
      <h2>Baseball</h2>
      <Dashboard />
    </div>
  );
}

export default App;
