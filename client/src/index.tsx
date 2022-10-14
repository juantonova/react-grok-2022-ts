import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

const PuzzlesApp = React.lazy(() => import('./puzzles/App/App'));
const AnswersApp = React.lazy(() => import('./answers/App/App'));

const variation = process.env.REACT_APP_TEST_SET === 'answers';

function Root(): JSX.Element {
  return (
    <React.StrictMode>
      <Suspense>{variation ? <AnswersApp /> : <PuzzlesApp />}</Suspense>
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Root />);
