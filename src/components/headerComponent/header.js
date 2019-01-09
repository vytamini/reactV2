import React, { Component } from 'react';
import {
    NavLink //NavLink is used to style the navigation bar depending on where the user is in the website
  } from 'react-router-dom';

// in the navigation bar, anchor tags are changed to NavLink tags which point to components (which are pages). activeStyle lets us style the active navigation button.

class Header extends Component {
  render() {
    return (
        <header class="header" id="top">
            <nav class="nav">
                <ul>
                    <li>
                        <NavLink to="/Creations" activeStyle={{ color: '#fff', borderBottom: '2px solid #fff', borderRadius: 0, cursor: 'default' }}>CREATIONS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" activeStyle={{ color: '#fff', borderBottom: '2px solid #fff', borderRadius: 0, cursor: 'default' }}>ABOUT ME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" activeStyle={{ color: '#fff', borderBottom: '2px solid #fff', borderRadius: 0, cursor: 'default' }}>CONTACT</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Header; //exports component

