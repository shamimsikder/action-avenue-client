import React from 'react'
import ReactDOM from 'react-dom/client'
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();
import 'react-toastify/dist/ReactToastify.css';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Routes';
import AuthProviders from './Providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} RouterProvider/>
    </AuthProviders>
  </React.StrictMode>,
)
