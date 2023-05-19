import React from 'react'
import ReactDOM from 'react-dom/client'
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} RouterProvider/>
  </React.StrictMode>,
)
