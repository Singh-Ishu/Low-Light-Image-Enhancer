import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <div id="navbar">
            <ul>
                <li>Upload</li>
                <li>Home</li>
                <li>Project</li>
            </ul>
        </div>
    );
}

export default Navbar;