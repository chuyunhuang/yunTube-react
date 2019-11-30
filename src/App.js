import React from 'react';

//Components
import { Home } from './Containers/Home/Home';
import { AppLayout } from './Components/AppLayout/AppLayout';

function App() {
  return (
    <AppLayout >
      <Home />
    </AppLayout>
  );
}

export default App;
