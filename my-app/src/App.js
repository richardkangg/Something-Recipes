import React from 'react';
import './App.css';
import Main from './components/Main';
import Categories from './components/Categories';
import { Routes } from './routes'
import { NavLink } from 'react-router-dom';

function App() {
  return (
      <div className="links">
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink exact to="/categories" activeClassName="active">
        Categories
      </NavLink>
      <NavLink exact to="/add" activeClassName="active">
        Add
      </NavLink>
    </nav>
      <Routes />
    </div>
  );
}

export default App;
