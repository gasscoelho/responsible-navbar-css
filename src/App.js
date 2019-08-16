import React, { useState } from 'react';
import Toolbar from './components/toolbar/Toolbar';
import SideDrawer from './components/sidedrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  function drawerToggleCLickHandler() {
    setSideDrawerOpen(!sideDrawerOpen);
  }

  function backdropClickHandler() {
    setSideDrawerOpen(false);
  }

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler}/>
  }

  return (
    <div className="app-container" style={{ height: '100%' }}>
      <Toolbar drawerClickHandler={drawerToggleCLickHandler}/>
      <SideDrawer show={sideDrawerOpen} close={backdropClickHandler}/>
      {backdrop}
      <main className="pages-container" style={{ marginTop: '56px' }}>
        {/* page content */}
      </main>
    </div>
  );
}

export default App;
