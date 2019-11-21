import React from 'react';
import './App.css';
import { Routes } from './routes'
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="links">
      <nav>
        <div className="linkBox">
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink exact to="/categories" activeClassName="active">
          Categories
        </NavLink>
        <NavLink exact to="/add" activeClassName="active">
          Add
        </NavLink>
        </div>
        <div className="navButton"></div>
      </nav>
      <Routes />
    </div>
  );
}

export default App;
