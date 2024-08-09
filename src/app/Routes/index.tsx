import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../../pages/Home';
import ProductPage from '../../pages/Product';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/:slug',
        element: <ProductPage />,
      },
    ],
  },
]);
