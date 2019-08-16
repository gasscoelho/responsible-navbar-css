import React from 'react';
import './SideDrawer.css';

export default function SideDrawer(props) {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <div className="side-drawer-items">
                <span>Title</span>
                <ul>
                    <a href="/" onClick={props.close}><li>Link</li></a>
                    <a href="/" onClick={props.close}><li>Link</li></a>
                    <a href="/" onClick={props.close}><li>Link</li></a>
                    <a href="/" onClick={props.close}><li>Link</li></a>
                </ul>
            </div>
        </nav>
    );
}