import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// react route 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './pages/Home/Home';
import ShowDetail from './pages/ShowDetail/ShowDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch('/services.json'),
        element: <Home></Home>
      },
      {
        path: "/showDetails/:id",
        loader: () => fetch('services.json'),
        element: <ShowDetail></ShowDetail>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
