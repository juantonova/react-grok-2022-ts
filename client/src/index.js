import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

const PuzzlesApp = React.lazy(() => import('./components/puzzles/App/App.jsx'));
const AnswersApp = React.lazy(() => import('./components/answers/App/App.jsx'));

const variation = process.env.REACT_APP_TEST_SET === 'answers' ? true : false;

function Root() {
  return (
    <React.StrictMode>
      <Suspense>
        {variation ? <AnswersApp /> : <PuzzlesApp />}
      </Suspense>
    </React.StrictMode>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<Root />);
