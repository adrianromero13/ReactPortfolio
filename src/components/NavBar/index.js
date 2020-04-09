import React from 'react';

function Navbar() {
    return (
    <div className="bg-dark">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container" max-height="56px">
            <a id="nameTextSpace" className="text-success bg-dark navbar-brand" href="#"><strong>Adrian Romero</strong></a>
            <button className="navbar-toggler border border-success" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="./index.html">About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./portfolio.html">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )};

export default Navbar;