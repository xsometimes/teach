import React, { Suspense } from 'react';
import { renderRoutes } from 'router/RenderRoutes';
import './App.less';

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      {renderRoutes()}
    </Suspense>
  );
}

export default App;
