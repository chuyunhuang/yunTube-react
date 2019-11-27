import React, { Component } from 'react';

//Containers
import HeaderNav from './Containers/HeaderNav/HeaderNav';
import SideBar from './Containers/SideBar/SideBar';

//Components
import { Home } from './Containers/Home/Home';

function App() {
  return (
    <React.Fragment>
      <HeaderNav />
      <SideBar />
      <Home />
    </React.Fragment>

  );
}

export default App;
