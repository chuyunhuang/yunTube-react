import React, { Component } from 'react';

//Components
import HeaderNav from './Containers/HeaderNav/HeaderNav';
import SideBar from './Containers/SideBar/SideBar';

function App() {
  return (
    <React.Fragment>
      <HeaderNav />
      <SideBar />
    </React.Fragment>

  );
}

export default App;
