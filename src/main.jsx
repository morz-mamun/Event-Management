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
import AuthProvider from './Provider/AuthProvider';
import Registration from './pages/Registration/Registration';
import PrivateShowDetail from './PrivateRoute/PrivateShowDetail';
import Blogs from './PrivateRoute/Blogs/Blogs';
import Venues from './PrivateRoute/Venues/Venues';
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
        loader: () => fetch('/services.json'),
        element: <PrivateShowDetail><ShowDetail></ShowDetail></PrivateShowDetail>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/venues",
        element: <Venues></Venues>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
