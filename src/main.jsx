import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

import './index.css';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />, // Trang Register
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ChakraProvider>
);
