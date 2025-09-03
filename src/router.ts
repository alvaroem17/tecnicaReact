import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { createBrowserRouter } from 'react-router';
import MainLayout from './layouts/MainLayout';

export const router =  createBrowserRouter([{
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/:id",
        Component: Details,
      },
      {
        path: "/login",
        lazy: () => import('./pages/Login').then(module => ({ Component: module.Login })),
      }
    ] 
  },
])