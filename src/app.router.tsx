import { createBrowserRouter, Navigate } from 'react-router'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { ProductDetail } from './pages/ProductDetail'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: ':slug',
        element: <ProductDetail />,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])
