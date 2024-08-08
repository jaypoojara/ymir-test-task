'use client';

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import IndexPage from '../../pages/Index';
import ProductPage from '../../pages/Product';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <IndexPage />,
      },
      {
        path: '/:slug',
        element: <ProductPage />,
      },
    ],
  },
]);
