import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import ErrorPage from './pages/ErrorPage';
import Setting from './pages/Settings';
import Library from './pages/Library';
import Search from './pages/Search';
import ProtectedRoute from './components/AuthRoutes';

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  {
    path: '/onboarding',
    element: (
      <ProtectedRoute>
        <Onboarding />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/settings',
    element: (
      <ProtectedRoute>
        <Setting />
      </ProtectedRoute>
    ),
  },
  {
    path: '/library',
    element: (
      <ProtectedRoute>
        <Library />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/search/:searchId',
    element: <Search />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
