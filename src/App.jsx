import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  { path: '/onboarding', element: <Onboarding /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
