import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/index.css'
import './sass/app.scss';
import App from './pages/App'
import About from './pages/About'
import Works from './pages/Works'
import Services from './pages/Services'
import ErrorPage from './pages/ErrorPage'
import LayoutComponents, { AltLayoutComponents } from './assets/layouts/LayoutComponents';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="works" element={<Works />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
