import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import ErrorPage from './pages/ErrorPage';
import Setting from './pages/Settings';
const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  { path: '/onboarding', element: <Onboarding /> },
  { path: '/settings', element: <Setting /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
