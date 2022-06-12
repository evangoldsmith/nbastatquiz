import React from "react";
import ReactDOM from 'react-dom/client';
import logo from './ball-logo.png';

export default function Header () {
    return (
        <nav className="Nav-bar">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="Title">NBAquiz</h1>
            <div className="Nav-items">
            <ul className="Nav-list">
                <li id='item'>quiz</li>
            </ul>
            </div>
        </nav>
    )
}