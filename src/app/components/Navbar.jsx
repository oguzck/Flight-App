import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from 'semantic-ui-react';

export default function Navbar({ className }) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light${className}`}>
            <a className="navbar-brand brand-custom" href="/">Book Your Flights! <Icon name='plane'/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav navbar-nav-custom">
                    <li className="nav-item item-custom">
                        <a className="nav-link item-custom" href="https://www.linkedin.com/in/oguzck/"><Icon name='linkedin'/> <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link item-custom " href="https://github.com/oguzck"><Icon name='github'/></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
