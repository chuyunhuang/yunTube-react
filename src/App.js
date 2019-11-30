import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import { Home } from './Containers/Home/Home';
import { AppLayout } from './Components/AppLayout/AppLayout';
import { Watch } from './Containers/Watch/Watch';

function App() {
  return (
    <AppLayout >
      <Switch>
        <Route path="/watch" component={Watch} />
        <Route path="/" component={Home} />
      </Switch>
    </AppLayout>
  );
}

export default App;
