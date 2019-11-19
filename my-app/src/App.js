import React from 'react';
import './App.css';
import Main from './components/Main';
import Categories from './components/Categories';
import { Routes } from './routes'

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
