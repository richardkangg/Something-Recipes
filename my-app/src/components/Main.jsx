import React from 'react';
import './layout/Main.css';

function Main() {
    return (
        <div className="main-container">
            <div className="block">
                <div className="main">
                    <h1>Something Recipes</h1>
                    <input className="search" placeholder="SEARCH" />
                </div>
            </div>
        </div>
    );
}

export default Main;        