import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../sidedrawer/DrawerToggleButton';

export default function Toolbar (props) {
    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="toolbar-logo">
                    <a href="/">Title</a>
                </div>
                <div className="spacer"></div>
                <div className="toolbar-navigation-items">
                    <ul>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}