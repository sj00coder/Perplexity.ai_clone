import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import ErrorPage from './pages/ErrorPage';
import Setting from './pages/Settings';
import Library from './pages/Library';

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  { path: '/onboarding', element: <Onboarding /> },
  { path: '/settings', element: <Setting /> },
  { path: '/library', element: <Library /> },
]);
export default router;
