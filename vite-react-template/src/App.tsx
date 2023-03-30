import * as React from 'react';

import { useRoutes } from 'react-router-dom';

import Test from './components/test';
import routes from './router';

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <Test tag="666" />
      {element}
    </div>
  )
}

export default App