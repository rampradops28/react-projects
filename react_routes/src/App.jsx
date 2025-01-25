import React from 'react';
import './index.css'
import Home from './Pages/Home';
import Electronics from './Pages/Electronics'; // assuming you have this page
import Books from './Pages/Books'; // assuming you have this page
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ElectronicsDetails from './Pages/ElectronicsDetails';
import BooksDetails from './Pages/BooksDetails';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/Electronics', 
    // element: <Electronics />,
    element: (
      <div className="layout">
        <Electronics />
        <Outlet />
      </div>
    ),
    children: [{path: ':id',element: <ElectronicsDetails /> }],
  },
  { path: '/Books', 
    // element: <Books /> ,
    element : (
      <div className="layout">
        <Books />
        <Outlet />
      </div>
    ),
    children: [{path: ':id',element: <BooksDetails />}]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
