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
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
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
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
