import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './Components/Signup';
import Homepage from './Components/Homepage';

const router=createBrowserRouter([
  {
    path:"/",
    element:(<Signup/>),
   
  },
  {
    path:"/homepage",
    element:(<Homepage/>)
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


