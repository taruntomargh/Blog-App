import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
