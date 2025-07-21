import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './root/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import AddCoffe from './Pages/AddCoffe.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {path:"/",element:<Home></Home>},
      {path:'/add-coffe',element:<AddCoffe></AddCoffe>}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
